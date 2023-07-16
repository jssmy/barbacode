import { Component } from '@angular/core';
import { AppSettings } from 'src/app/libs/app-settings.const';

@Component({  
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
appSettings = AppSettings;
}
