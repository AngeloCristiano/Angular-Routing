import { Routes } from '@angular/router';
import { Ciao1Component } from './ciao1/ciao1.component';
import { Ciao2Component } from './ciao2/ciao2.component';
import { Ciao3Component } from './ciao3/ciao3.component'
export const AppRoutes: Routes = [
  { path: '', component: Ciao1Component },
  { path: 'ciao1', component: Ciao2Component },
  { path: 'ciao2', component: Ciao3Component }
];