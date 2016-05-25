declare var webend: any;

let mod = angular.module('webend_ng1dir', []);
mod.directive('ng1StatusStyler', fn);

function fn() {
  return {
    scope: {
      status: '&'
    },
    link: (scope: any, el: any) => {
      scope.$watch('status', (newValue: boolean) => {
        if (newValue) {
          el[0].style.color = '#00FF00';
        } else {
          el[0].style.color = '#FF0000';
        }        
      });
    }
  }
}

export default mod;