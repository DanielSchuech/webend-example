declare var webend: any;

import { Component, OnInit, Inject } from '@angular/core';

let LightService = webend.getService('LightService');

@Component({
  moduleId: module.id,
  selector: 'ng2-light',
  template: require('./template.html'),
  directives: [webend.adapter.upgradeNg1Directive(
      webend.getOptNg1Directive('ng1StatusStyler'))]
})
export class ng2Component implements OnInit {
  public on = true;
  constructor(@Inject(LightService) private light: any) {
    light.event && light.event.subscribe((enable: boolean) => {
      this.on = enable;
    });
  }

  ngOnInit() { }
  
  switch() {
    this.on = !this.on;
    if (this.light.event) {
      this.light.event.emit(this.on); 
    }
  }

}