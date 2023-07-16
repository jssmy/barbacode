import { Component } from '@angular/core';
import { AppSettings } from 'src/app/libs/app-settings.const';

@Component({
  standalone: true,
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  appSettings = AppSettings;
}
