import { Routes } from '@angular/router';
import { LandingPage } from './landing-page/landing-page';
import { Home } from './home/home';
import { Contact } from './contact/contact';
import { About } from './about/about';

export const routes: Routes = [
  {
    path: '',
    component: LandingPage,
  },
  { path: 'contact', component: Contact },
  { path: 'home', component: Home },
  // {
  //   path: 'home',
  //   component: Home,
  //   children: [
  //     { path: 'contact', component: Contact, outlet: 'details' },
  //     { path: 'about', component: About, outlet: 'details' },
  //   ],
  // },
];
