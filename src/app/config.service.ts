import { Injectable } from '@angular/core';
import {configaration} from './configaration';

@Injectable()
export class ConfigService {
  config = configaration;
  constructor() { }

  getConfig(){
    return this.config;
  }

}
