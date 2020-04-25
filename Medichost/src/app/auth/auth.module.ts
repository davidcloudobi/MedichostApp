import { NgModule } from "@angular/core";
import { LoginComponent } from "./login/login.component";
import { ForgotpasswordComponent } from "./forgotpassword/forgotpassword.component";
import { SignupComponent } from "./signup/signup.component";
import { AuthRouter } from "./authRoutes.module";
import { SharedModules } from "../shared/widget/shared.module";
import { LoginmodalComponent } from './loginmodal/loginmodal.component';
import { SignupmodalComponent } from './signupmodal/signupmodal.component';


@NgModule({
  imports: [
    SharedModules,
    AuthRouter
  ],
  declarations: [
    LoginComponent,
    SignupComponent,
    LoginmodalComponent,
    SignupmodalComponent,
    ForgotpasswordComponent
  ],
})
export class AuthModule {}
