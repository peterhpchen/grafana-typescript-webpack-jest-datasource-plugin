///<reference path="../node_modules/grafana-sdk-mocks/app/headers/common.d.ts" />

import * as module from '../src/module';
import {QueryCtrl} from 'app/plugins/sdk';

describe('module', () => {
  describe('Datasource', () => {
    it('should exist', () => {
      expect(module.Datasource).toBeDefined();
    });
  });
  describe('QueryCtrl', () => {
    it('should exist', () => {
      expect(module.QueryCtrl).toBeDefined();
    });
    it('should inherit QueryCtrl', () => {
      expect(new module.QueryCtrl({},{})).toBeInstanceOf(QueryCtrl);
    });
  });
  describe('ConfigCtrl', () => {
    it('should exist', () => {
      expect(module.ConfigCtrl).toBeDefined();
    });
  });
});
