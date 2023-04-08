import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './pages/login/login.component';
import { AngularMaterialModule } from './angular-material.module';
import { AsideComponent } from './shared/aside/aside.component';
import { HomeComponent } from './pages/home/home.component';
import { ToolbarComponent } from './shared/toolbar/toolbar.component';
import { InformationComponent } from './pages/home/information/information.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AsideComponent,
    HomeComponent,
    ToolbarComponent,
    InformationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule, 
  ],
  exports:[
    LoginComponent,
    AsideComponent,
    HomeComponent,
    ToolbarComponent,
    InformationComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
