import { Routes } from '@angular/router';
import { HomePage } from './pages/home/home.page';
import { AboutUsPage } from './pages/about-us/about-us.page';
import { ProductPage } from './pages/Products/product/product.page';

export const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children: [
      {
        path: 'about-us',
        component:AboutUsPage
      },
      {
        path: 'products',
        component:ProductPage
      }
    ],
  },
  {
    path: '',
    redirectTo: 'home/main',
    pathMatch: 'full',
  },
  {
    path: 'about-us',
    loadComponent: () => import('./pages/about-us/about-us.page').then( m => m.AboutUsPage)
  },
  {
    path: 'products',
    loadComponent: () => import('./pages/Products/product/product.page').then( m => m.ProductPage)
  },
  {
    path: 'sliders',
    loadComponent: () => import('./pages/main/sliders/sliders.page').then( m => m.SlidersPage)
  },
  {
    path: 'login',
    loadComponent: () => import('./pages/account/login/login.page').then( m => m.LoginPage)
  },
  {
    path: 'register',
    loadComponent: () => import('./pages/account/register/register.page').then( m => m.RegisterPage)
  },
  {
    path: 'accountacount',
    loadComponent: () => import('./pages/accountacount/accountacount.page').then( m => m.AccountacountPage)
  },
  {
    path: 'account',
    loadComponent: () => import('./pages/account/account.page').then( m => m.AccountPage)
  },
]
