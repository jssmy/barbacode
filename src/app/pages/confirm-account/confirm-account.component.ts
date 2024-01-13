import { Component } from '@angular/core';
import { ButtonComponent } from 'src/app/commons/components/button/button.component';

@Component({
  selector: 'app-confirm-account',
  templateUrl: './confirm-account.component.html',
  styleUrls: ['./confirm-account.component.scss'],
  standalone: true,
  imports: [
    ButtonComponent
  ]
})
export class ConfirmAccountComponent {

}
