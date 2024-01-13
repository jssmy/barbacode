import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/home/home.module').then(module => module.HomeModule)
  },
  {
    path: 'course/:slug',
    loadChildren: () => import('./pages/course/course.module').then(module => module.CourseModule)
  },
  {
    path: 'login',
    loadComponent: () => import('./pages/login/login.component').then(component => component.LoginComponent)
  },
  {
    path: 'confirm-account/:idToken',
    loadComponent: () => import('./pages/confirm-account/confirm-account.component').then(component => component.ConfirmAccountComponent)
  },
  {
    path: '**',
    loadComponent: () => import('./pages/not-found/not-found.component').then(component => component.NotFoundComponent)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
