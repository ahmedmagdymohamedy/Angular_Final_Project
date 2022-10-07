import { ProductDetailsComponent } from './modules/product-details/product-details/product-details.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './modules/auth-page/componants/login/login.component';
import { RegistrationComponent } from './modules/auth-page/componants/registration/registration.component';
import { HomePageComponent } from './modules/home-page/home-page.component';
import {
  canActivate,
  redirectUnauthorizedTo,
  redirectLoggedInTo,
} from '@angular/fire/auth-guard';
import { PaymentComponent } from './modules/payment-page/components/payment/payment.component';
const redirectToLogin = () => redirectUnauthorizedTo(['login']);
const redirectToHome = () => redirectLoggedInTo(['home']);

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomePageComponent,
    // loadChildren: () => import('./modules/home-page/home-page.module').then(m => m.HomePageModule)
  },
  {
    path: 'login',
    component: LoginComponent,
    ...canActivate(redirectToHome),
  },
  {
    path: 'registration',
    component: RegistrationComponent,
    ...canActivate(redirectToHome),
  },
  {
    path: 'home',
    component: HomePageComponent,
    ...canActivate(redirectToLogin),
  },

  {
    path: 'home',
    component: HomePageComponent,
    loadChildren: () =>
      import('./modules/home-page/home-page.module').then(
        (m) => m.HomePageModule
      ),
  },
  {
    path: 'product/:id',
    component: ProductDetailsComponent,
    loadChildren: () =>
      import('./modules/product-details/product-details.module').then(
        (m) => m.ProductDetailsModule
      ),
  },
  {
    path: 'payment',
    component: PaymentComponent,
    loadChildren: () =>
      import('./modules/payment-page/payment-page.module').then(
        (m) => m.PaymentPageModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), CommonModule],
  exports: [RouterModule],
})
export class AppRoutingModule { }
