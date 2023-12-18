import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegComponent } from './reg/reg.component';
import { HomeComponent } from './home/home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { DataService } from './data.service';
import { VisibilityService } from './visibility.service';

const routes: Routes = [

  // {path:'', component: HomeComponent},
  {path:'login', component: LoginComponent},
  {path:'reg', component: RegComponent},

];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegComponent,
    HomeComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    provideClientHydration(),
    DataService,
    VisibilityService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

