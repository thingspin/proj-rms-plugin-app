import {loadPluginCss} from 'grafana/app/plugins/sdk';

import {RemoteSolutionDSCtrl} from './services/remoteSolutionDS';
import {RemoteSolutionWSCtrl} from './services/remoteSolutionWS';

import {AppConfigCtrl} from './components/config';
import {SettingActionInAdvancePageCtrl} from './components/actionInAdvance/actionInAdvance';
import {InspectionPropertyPageCtrl} from './components/inspectionProperty/inspectionProperty';

loadPluginCss({
  dark: 'plugins/proj-rms-plugin-app/css/rms-plugins-app.dark.css',
  light: 'plugins/proj-rms-plugin-app/css/rms-plugins-app.light.css'
});

export {
  AppConfigCtrl as ConfigCtrl,

  RemoteSolutionDSCtrl as RemoteSolutionDS,
  RemoteSolutionWSCtrl as RemoteSolutionWS,

  InspectionPropertyPageCtrl as InspectionProperty,
  SettingActionInAdvancePageCtrl as SettingActionInAdvance

};
