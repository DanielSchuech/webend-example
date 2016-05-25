import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class LightService {
  public event = new EventEmitter();
  constructor() { }

}