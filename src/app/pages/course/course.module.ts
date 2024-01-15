import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseComponent } from './course.component';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from 'src/app/commons/layouts/header/header.component';
import { FooterComponent } from 'src/app/commons/layouts/footer/footer.component';
import { NavtabComponent } from 'src/app/commons/components/navtab/navtab.component';
import {ListGroupComponent} from "../../commons/components/list-group/list-group.component";
import {ListItemComponent} from "../../commons/components/list-item/list-item.component";
import {ButtonComponent} from "../../commons/components/button/button.component";
import { BreadcrumbComponent } from 'src/app/commons/components/breadcrumb/breadcrumb.component';

const routes: Routes = [
  {
    path: '',
    component: CourseComponent
  }
];

@NgModule({
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  declarations: [
    CourseComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HeaderComponent,
    BreadcrumbComponent,
    FooterComponent,
    NavtabComponent,
    ListGroupComponent,
    ListItemComponent,
    ButtonComponent
  ]
})
export class CourseModule { }
