import { OrganizationService } from './_services/organization.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { JwtModule } from '@auth0/angular-jwt';
// import { NgxGalleryModule } from 'ngx-gallery';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthService } from './_services/auth.service';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';
import { NavComponent } from './nav/nav.component';
import { AlertifyService } from './_services/alertify.service';
import { AddeditorganizationComponent } from './addeditorganization/addeditorganization.component';
import { ListorganizationComponent } from './listorganization/listorganization.component';


export function tokenGetter() {
  return localStorage.getItem('token');
}

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    NavComponent,
    AddeditorganizationComponent,
    ListorganizationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    // NgxGalleryModule,

    RouterModule.forRoot(appRoutes),

    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        // whitelistedDomains: ['localhost:44348'],
        // blacklistedRoutes: ['localhost:44348/api/auth']
      }
    })
  ],
  providers: [
    AuthService,
    AlertifyService,
    AlertifyService,
    OrganizationService


  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
