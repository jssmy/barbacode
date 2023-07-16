import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppSettings } from 'src/app/libs/app-settings.const';
import {ButtonComponent} from "../../components/button/button.component";
import {CommonModule} from "@angular/common";

@Component({
  standalone: true,
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  imports: [
    RouterModule,
    ButtonComponent,
    CommonModule
  ]
})
export class HeaderComponent {
  appSettings = AppSettings;
  constructor() {
    document.addEventListener('scroll', () => {
      document.documentElement.dataset['scroll'] = window.scrollY.toString();
      console.log(window.scrollY.toString());
    });
  }
}
