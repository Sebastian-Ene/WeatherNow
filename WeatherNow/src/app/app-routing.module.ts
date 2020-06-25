import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { mainModule } from 'process';
import { MainPageComponent } from './main-page/main-page.component';


const routes: Routes = [
  { path: 'welcome', component: WelcomePageComponent },
  { path: 'main', component: MainPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }