import { CommonModule } from '@angular/common';
import { HomeComponent } from './modules/auth-page/componants/home/home.component';
import { LandingComponent } from './modules/auth-page/componants/landing/landing.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './modules/auth-page/componants/login/login.component';
import { RegistrationComponent } from './modules/auth-page/componants/registration/registration.component';
import{canActivate,redirectUnauthorizedTo,redirectLoggedInTo} from '@angular/fire/auth-guard'
const redirectToLogin=()=>redirectUnauthorizedTo(['login']);
const redirectToHome=()=>redirectLoggedInTo(['home']);


const routes: Routes = [
  {
    path: "",
    pathMatch:"full",
    component:LandingComponent
    // loadChildren: () => import('./modules/home-page/home-page.module').then(m => m.HomePageModule)
  },
  {
    path:"login",
    component:LoginComponent,
    ...canActivate(redirectToHome)
  },
  {
    path:"registration",
    component:RegistrationComponent,
    ...canActivate(redirectToHome)

  },
  {
    path:"home",
    component:HomeComponent,
    ...canActivate(redirectToLogin)
  }


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    CommonModule,
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
