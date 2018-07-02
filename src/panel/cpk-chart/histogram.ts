import _ from 'lodash';
import { tickStep } from 'grafana/app/core/utils/ticks';

var gaussian = require('gaussian');

/**
 * Convert series into array of series values.
 * @param data Array of series
 */
export function getSeriesValues(dataList: any[]): number[] {
  const VALUE_INDEX = 0;
  let values = [];

  // Count histogam stats
  for (let i = 0; i < dataList.length; i++) {
    let series = dataList[i];
    let datapoints = series.datapoints;
    for (let j = 0; j < datapoints.length; j++) {
      if (datapoints[j][VALUE_INDEX] !== null) {
        values.push(datapoints[j][VALUE_INDEX]);
      }
    }
  }

  return values;
}

/**
 * Convert array of values into timeseries-like histogram:
 * [[val_1, count_1], [val_2, count_2], ..., [val_n, count_n]]
 * @param values
 * @param bucketSize
 */
export function convertValuesToHistogram(values: number[], bucketSize: number, min: number, max: number, mean: number, variance: number): any[] {
  let histogram = {};

  let minBound = getBucketBound(min, bucketSize);
  let maxBound = getBucketBound(max, bucketSize);
  let bound = minBound;
  let n = 0;
  while (bound <= maxBound) {
    histogram[bound] = 0;
    bound = minBound + bucketSize * n;
    n++;
  }

  for (let i = 0; i < values.length; i++) {
    let bound = getBucketBound(values[i], bucketSize);
    histogram[bound] = histogram[bound] + 1;
  }

  let list = [];
  let distribution = gaussian(mean,variance);

  // left points
  _.map(histogram, (count, bound) => {
    if(Number(bound) < mean) {
       list.push({"x": Number(bound),"y": distribution.pdf(Number(bound))});
    }
  });

  // right points
  list.map(ele => {
    let right = mean - ele.x;
    right = mean+right;
    list.push({"x": right,"y": distribution.pdf(right)});
  });
  // mean for normal distribution
  list.push({"x": mean,"y": distribution.pdf(mean)});
  return _.sortBy(list, "x");
}

/**
 * Convert series into array of histogram data.
 * @param data Array of series
 * @param bucketSize
 */
export function convertToHistogramData(
  data: any,
  preferedBucketSize: number,
  panelWidth: number
): any[] {
  return data.map(series => {
    let values = getSeriesValues([series]);
    series.histogram = true;
    //let bucketsize = bucketSize;
    let ticks = preferedBucketSize || panelWidth / 50;
    let min = _.min(values);
    let max = _.max(values);
    let mean = _.mean(values);
    let variance = getVariance(values);
    let bucketSize = tickStep(min, max, ticks);
    //console.log("bucket size")
    //console.log(bucketSize);
    let histogram = convertValuesToHistogram(values, bucketSize, min, max,mean,variance);
    series.data = histogram;
    series.mean = mean;
    //series.min = min;
    //series.max = max;
    return series;
  });
}

function getBucketBound(value: number, bucketSize: number): number {
  return Math.floor(value / bucketSize) * bucketSize;
}

function getVariance(values) {
  var avg = _.mean(values);

  var squareDiffs = values.map(function(value) {
    var diff = value - avg;
    var sqrDiff = diff * diff;
    return sqrDiff;
  });

  var variance = _.mean(squareDiffs);
  return variance;
}
