import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NotFoundComponent } from './not-found/not-found.component';

//routing rules
//https:/localhost:4200/aboutus
const routes: Routes = [
  {path: "aboutUs", component:AboutUsComponent},
  {path: "contactUs", component:ContactUsComponent},
  {path: "login", component:LoginComponent},
  {path: "home/:uname", component:DashboardComponent}, //uname will retrieve the name from
  //a path
  {path: "", redirectTo: "login", pathMatch:"full"},
  {path: "**", component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
