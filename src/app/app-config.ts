import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AppConfigService {

  private appConfig: any;
  
  constructor(private http: HttpClient) { }

  async loadAppConfig() {
    const config = await this.http.get('/assets/app-config.json')
      .toPromise();
    this.appConfig = config;
  }

  get baseUrl() : string {
    return this.appConfig.baseUrl;
  }
}