///<reference path="../node_modules/grafana-sdk-mocks/app/headers/common.d.ts" />

export default class DemoDatasource {
  constructor() {
  }

  query() {
    throw new Error("Query Support not implemented yet.");
  }

  metricFindQuery() {
    throw new Error("Template Variable Support not implemented yet.");
  }

  testDatasource() {
    throw new Error("Template Variable Support not implemented yet.");
  }
}
