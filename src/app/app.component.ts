import { Component } from '@angular/core';
import { AppConfigService } from "./app-config";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {
  constructor(private appConfigService: AppConfigService) {
  }
  title = 'test-app';
  apiUrl = `${this.appConfigService.baseUrl}/api/v1`
}
