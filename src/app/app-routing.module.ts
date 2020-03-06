import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { ThanosSnapComponent } from './simulations-components/thanos-snap/thanos-snap.component';
import {
  ElasticCollisionToFindPIComponent
} from './simulations-components/elastic-collision-to-find-pi/elastic-collision-to-find-pi.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'thanos-snap', component: ThanosSnapComponent },
  {
    path: 'elastic-collision-of-blocks-to-calculate-digits-of-pi',
    component: ElasticCollisionToFindPIComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
