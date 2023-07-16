import { Component } from '@angular/core';
import { AppSettings } from './libs/app-settings.const';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  appSettings = AppSettings;
}
