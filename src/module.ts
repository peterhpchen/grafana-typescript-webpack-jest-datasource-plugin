import { QueryCtrl } from "app/plugins/sdk";
import DemoConfigCtrl from './config_ctrl.ts';

class DemoDatasource {}
class DemoQueryCtrl extends QueryCtrl {}

export {
    DemoDatasource as Datasource,
    DemoQueryCtrl as QueryCtrl,
    DemoConfigCtrl as ConfigCtrl,
};
