import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { LoginService } from './login/login.service';
import { Routes, RouterModule } from '@angular/router';
import { MapmodComponent } from './mapmod/mapmod.component';
import { DeviceComponent } from './device/device.component';
import { SweepComponent } from './sweep/sweep.component'; // CLI imports router
import { SweepService } from './services/sweep.service';
import { DevicesService } from './services/devices.service';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  { path: 'login-component', component: LoginComponent },
  { path: 'mapmod-component', component: MapmodComponent },
]; // sets up routes constant where you define your routes

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    LoginComponent,
    MapmodComponent,
    DeviceComponent,
    SweepComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [LoginService, SweepService, DevicesService],
  bootstrap: [AppComponent],
  exports: [RouterModule]
})
export class AppModule { }
