import { QueryCtrl } from "app/plugins/sdk";

class DemoDatasource {}
class DemoQueryCtrl extends QueryCtrl {}
class DemoConfigCtrl {}

export {
    DemoDatasource as Datasource,
    DemoQueryCtrl as QueryCtrl,
    DemoConfigCtrl as ConfigCtrl,
};
