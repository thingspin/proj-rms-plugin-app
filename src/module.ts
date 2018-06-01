import {loadPluginCss} from 'grafana/app/plugins/sdk';

// register Remote Solution Services
import './services/remoteSolutionDS';
import './services/remoteSolutionWS';
import './services/remoteSolutionMQTT';

import {AppConfigCtrl} from './app-config/config';

const appId = "proj-rms-plugin-app";
const baseCssFilename = "rms-plugins-app";
loadPluginCss({
  dark: `plugins/${appId}/css/${baseCssFilename}.dark.css`,
  light: `plugins/${appId}/css/${baseCssFilename}.light.css`
});

export {
  AppConfigCtrl as ConfigCtrl,
};
