import {loadPluginCss} from 'grafana/app/plugins/sdk';

// register Remote Solution Services
import './services/remoteSolutionDS';
import './services/remoteSolutionWS';
import './services/remoteSolutionMQTT';

import {AppConfigCtrl} from './app-config/config';
import {SettingActionInAdvancePageCtrl} from './pages/actionInAdvance/actionInAdvance';
import {InspectionPropertyPageCtrl} from './pages/inspectionProperty/inspectionProperty';

loadPluginCss({
  dark: 'plugins/proj-rms-plugin-app/css/rms-plugins-app.dark.css',
  light: 'plugins/proj-rms-plugin-app/css/rms-plugins-app.light.css'
});

export {
  AppConfigCtrl as ConfigCtrl,


  InspectionPropertyPageCtrl as InspectionProperty,
  SettingActionInAdvancePageCtrl as SettingActionInAdvance,
};
