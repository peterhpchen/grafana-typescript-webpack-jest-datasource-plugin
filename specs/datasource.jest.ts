///<reference path="../node_modules/grafana-sdk-mocks/app/headers/common.d.ts" />

import DemoDatasource from '../src/datasource';

describe('DemoDatasource', () => {
  const ds = new DemoDatasource();

  describe('query', () => {
    it("should be defined", () => {
      expect(ds.query).toBeDefined();
    });
  });

  describe('testDatasource', () => {
    it("should be defined", () => {
      expect(ds.testDatasource).toBeDefined();
    });
  });

  describe('metricFindQuery', () => {
    it("should be defined", () => {
      expect(ds.metricFindQuery).toBeDefined();
    });
  });
});
