///<reference path="../node_modules/grafana-sdk-mocks/app/headers/common.d.ts" />

import DemoConfigCtrl from '../src/config_ctrl';

describe('DemoConfigCtrl', () => {
  describe('static', () => {
    it('should have templateUrl', () => {
      expect(DemoConfigCtrl.templateUrl).toBeTruthy();
    });
  });
});
