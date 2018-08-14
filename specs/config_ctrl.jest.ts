///<reference path="../node_modules/grafana-sdk-mocks/app/headers/common.d.ts" />

import DemoConfigCtrl from '../src/config_ctrl';

describe('DemoConfigCtrl', () => {
  describe('static', () => {
    it('should have templateUrl', () => {
      expect(DemoConfigCtrl.templateUrl).toBeTruthy();
    });
  });
  describe('init', () => {
    it('should have customInput default value', () => {
      DemoConfigCtrl.prototype.current = {jsonData: {}};
      const ctrl = new DemoConfigCtrl();
      expect(ctrl.current.jsonData.customInput).toBe('default');
    })
  });
});
