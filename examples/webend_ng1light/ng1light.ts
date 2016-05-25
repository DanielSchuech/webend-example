declare var webend: any;

let mod = angular.module('webend_ng1light', []);

mod.directive('ng1Light', ng1Light);

function ng1Light() {
  return {
    controller: ctrl,
    controllerAs: 'ctrl',
    template: require('./template.html')
  }
}

ctrl.$inject = [webend.getOptNg1Service('LightService')]
function ctrl(lightService: any) {
  this.on = true;
  
  if (lightService.event) {
    lightService.event.subscribe((enable: boolean) => {
      this.on = enable;
    })
  }
  
  this.switch = () => {
    this.on = !this.on;
    if (lightService.event) {
      lightService.event.emit(this.on);
    }
  }
}

export default mod;
