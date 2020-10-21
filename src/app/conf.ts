import { Injectable } from '@angular/core';
import { AppConfigService } from "./app-config";

@Injectable()
export class Conf {
  constructor(public configService: AppConfigService) {
  }

  get config(): any {
    return {
      baseUrl: this.configService.baseUrl
    }
  }
}