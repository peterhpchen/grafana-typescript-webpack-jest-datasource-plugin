import { QueryCtrl } from "app/plugins/sdk";
import DemoDatasource from './datasource.ts';

class DemoQueryCtrl extends QueryCtrl {}
class DemoConfigCtrl {}

export {
    DemoDatasource as Datasource,
    DemoQueryCtrl as QueryCtrl,
    DemoConfigCtrl as ConfigCtrl,
};
