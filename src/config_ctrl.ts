export default class DemoConfigCtrl {
  static templateUrl: string = 'partials/config.html';

  current: {
    jsonData: any
  };

  constructor() {
    this.current.jsonData.customInput = this.current.jsonData.customInput || 'default';
  }
}
