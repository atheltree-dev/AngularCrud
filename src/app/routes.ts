import { AddeditorganizationComponent } from './addeditorganization/addeditorganization.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';

import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ListorganizationComponent } from './listorganization/listorganization.component';

export const appRoutes: Routes = [
  { path: '', component: LoginComponent },
  {
    path: '',
    runGuardsAndResolvers: 'always',
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'register', component: RegisterComponent },
      {path: 'organization', component: ListorganizationComponent},
      {path: 'addorganization', component: AddeditorganizationComponent},
      {path: 'editorganization/id', component: AddeditorganizationComponent},
    ]
  },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];
