import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './homepage/homepage.component';
import { SignuppageComponent } from './signuppage/signuppage.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { RouterModule, Routes } from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { MatButtonModule} from '@angular/material/button';
import { MatCardModule} from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UsermanagementComponent } from './usermanagement/usermanagement.component';
import {MatTableModule} from '@angular/material/table';
import { AdduserComponent } from './adduser/adduser.component';
const routes: Routes = [
{
  path:'forgotpassword',
  component:ForgotpasswordComponent
},
{
  path:'homepage',
  component:HomepageComponent
},
{
  path:'loginpage',
  component:LoginpageComponent
},
{
  path:'signuppage',
  component:SignuppageComponent
},
{
  path:'usermanagement',
  component:UsermanagementComponent
},
{
  path:'adduser',
  component:AdduserComponent
},
{
  path:'',
  redirectTo:'homepage',
  pathMatch:'full'
}
];
@NgModule({
  declarations: [
    HomepageComponent,
    SignuppageComponent,
    LoginpageComponent,
    ForgotpasswordComponent,
    UsermanagementComponent,
    AdduserComponent,

],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    ReactiveFormsModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    HttpClientModule,
    MatTableModule
    
   
  ]
})
export class AuthModuleModule { }
