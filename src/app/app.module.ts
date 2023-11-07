import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthenticationComponent } from './users/authentication/authentication.component';
import { InscriptionComponent } from './users/inscription/inscription.component';
import {RouterModule, Routes} from "@angular/router";
import { UsersComponent } from './users/users.component';
import {HomeComponent} from './home/home.component'

const appRoutes: Routes = [
  {
    path: '', // Chemin vide pour la page d'accueil
    component: HomeComponent,
  },
  {
    path: 'users', component: UsersComponent, children: [
      {
        path: 'create',
        component: InscriptionComponent,
      },
      {
        path: 'login',
        component: AuthenticationComponent,
      },
    ]
  },
  
];
@NgModule({
  declarations: [
    AppComponent,
    AuthenticationComponent,
    InscriptionComponent,
    UsersComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule, 
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
