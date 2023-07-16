import { Component } from '@angular/core';
import {ButtonComponent} from "../../commons/components/button/button.component";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  standalone: true,
  imports: [
    ButtonComponent
  ]
})
export class LoginComponent {

}
