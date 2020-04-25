import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { SignupComponent } from './signup/signup.component';


const routes:Routes = [
  { path:"login", component:LoginComponent  },
  { path:"forgetpassword", component:ForgotpasswordComponent  },
  { path:"signup", component:SignupComponent  }
];

@NgModule({
  imports:[
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})

export class AuthRouter { }
