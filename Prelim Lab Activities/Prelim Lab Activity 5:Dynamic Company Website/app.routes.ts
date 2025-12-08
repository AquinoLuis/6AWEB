import { Routes } from '@angular/router';
import { Directives } from './directives/directives';
import { Pagenotfound } from './pagenotfound/pagenotfound';
import { Tailwind } from './tailwind/tailwind';
import { Home } from './home/home';
import { Employee } from './employee/employee';
import { About } from './about/about';
import { Products } from './products/products';

export const routes: Routes = [
  {path:'', component: Home},
  {path:'employee', component: Employee},
  {path:'about', component: About},
  {path:'products', component: Products},
  {path:'tailwind', component: Tailwind},
  {path:'**', component: Pagenotfound}
];
