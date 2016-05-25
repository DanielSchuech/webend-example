import TinyDiInjectable from './tinidi';

import * as express from 'express';
import * as path from 'path';

export default class Theme1 extends TinyDiInjectable{
  constructor(hub: any) {
    super();
    
    let themeCss = path.normalize(__dirname + '/theme.css');
    let server: express.Application = hub.app;
    
    server.get('/theme.css', (req, res) => {
      res.sendFile(themeCss);
    });
  }
}
Theme1.$inject = {
  deps: ['webend_hub'],
  callAs: 'class'
};
