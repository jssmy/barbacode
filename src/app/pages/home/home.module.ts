import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HeaderComponent } from '../../commons/layouts/header/header.component';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from '../../commons/layouts/footer/footer.component';
import { CourseCardComponent } from 'src/app/commons/components/course-card/course-card.component';
import {ButtonComponent} from "../../commons/components/button/button.component";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  }
];
@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HeaderComponent,
    FooterComponent,
    CourseCardComponent,
    ButtonComponent,
    RouterModule.forChild(routes)
  ],
  exports: [HomeComponent]
})
export class HomeModule { }
