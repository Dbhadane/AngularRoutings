import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AttendanceComponent } from './attendance/attendance.component';
import { AuthGuard } from './auth.guard';
import { ContactComponent } from './contact/contact.component';
import { DashboardComponent } from './dash-board/dashboard.component';
import { CreateemployeeComponent } from './Employee/create-emp/createemployee/createemployee.component';
import { EmpdetailsComponent } from './Employee/employee-details/empdetails.component';
import { EmplistComponent } from './Employee/employee-list/emplist.component';
import { EmpupdateComponent } from './Employee/employee-update/empupdate.component';
//import { Home1Component } from './externalmodule/home1/home1.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { Page404Component } from './page404/page404.component';
import { ProfileComponent } from './profile/profile.component';

// const routes: Routes = [
//   {path:'home',component:HomeComponent},
//   {path:'contact',component:ContactComponent},
//   {path:'dash-board',canActivate : [AuthGuard],component:DashboardComponent},
//   {path:'login',component:LoginComponent},
//   {path:'logout',component:LogoutComponent},
  

// ];

// const routes: Routes = [
//   {
//     path: "",
//     component: Home1Component
//   },
//   {
//     path: "posts",
//    // loadChildren: "../app/posts/posts.module#PostsModule"
//    loadChildren: () => import('./ExternalModule/posts/posts.module').then(m => m.PostsModule)
  
//   },
//   {
//     path: "king",
//     loadChildren: "../app/king/king.module#KingModule"
//   }
// ];

// const routes: Routes = [
//   { path: 'dashboard', component: DashboardComponent },
//   { path: 'profile', component: ProfileComponent },
//   { path: 'attendance', component: AttendanceComponent },
//   { path: 'leaves', loadChildren: () => import(`./leaves/leaves.module`).then(m => m.LeavesModule) },
//   { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
//   { path: '**', component: Page404Component },
// ];

const routes: Routes = [
  { path: '', redirectTo: 'employee', pathMatch: 'full' },
  { path: 'employees', component: EmplistComponent },
  { path: 'add', component: CreateemployeeComponent },
  { path: 'update/:id', component: EmpupdateComponent },
  { path: 'details/:id', component: EmpdetailsComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
