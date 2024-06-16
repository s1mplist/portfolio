import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '',   redirectTo: '/home', pathMatch: 'full' }, // redirect to `home`

  { path: '404', component: PagenotfoundComponent },  // Wildcard route for a 404 page
  { path: '**',   redirectTo: '/404', pathMatch: 'full' }
];