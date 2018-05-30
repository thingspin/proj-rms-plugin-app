import _ from 'lodash';
import { tickStep } from 'grafana/app/core/utils/ticks';
//import TimeSeries from 'grafana/app/core/time_series2';
//var getCurvePoints = require("cardinal-spline-js").getCurvePoints;
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
export function convertValuesToHistogram(values: number[], bucketSize: number, min: number, max: number): any[] {
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
  
  //let list = [];
  let histogam_series = _.map(histogram, (count, bound) => {
    //list.push(Number(bound));
    //list.push(count);  
    return {"x":Number(bound),"y":count};
    //return Number(bound),count;
  });
  //console.log(histogam_series);
  /*
  //console.log("=============");
  //console.log(list);
  console.log(getCurvePoints(list,1,5,true));
  list = getCurvePoints(list,0.5,25,false);
  let list2 = [];
  //let list2 = [];
  for (let i=0;i<list.length;i+=2) {
    list2.push({"x":list[i],"y":list[i+1]});
  }
  */
  // Sort by Y axis values
  //return final;
  return _.sortBy(histogam_series, "x");
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
    let bucketSize = tickStep(min, max, ticks);
    //console.log("bucket size")
    //console.log(bucketSize);
    let histogram = convertValuesToHistogram(values, bucketSize, min, max);
    series.data = histogram;
    //series.min = min;
    //series.max = max;
    return series;
  });
}

function getBucketBound(value: number, bucketSize: number): number {
  return Math.floor(value / bucketSize) * bucketSize;
}
