import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LoginButtonsComponent } from './login-buttons/login-buttons.component';
import { CustomerMainComponent } from './customer-main/customer-main.component';
import { MainLoginComponent } from './home main/main-login.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { UserMainComponent } from './user-main/user-main.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { UserFindIdComponent } from './user-find-id/user-find-id.component';
import { UserFindUsernameComponent } from './user-find-username/user-find-username.component';
import { UserUpdateComponent } from './user-update/user-update.component';
import { UserDeleteIdComponent } from './user-delete-id/user-delete-id.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AccountmainComponent } from './accountmain/accountmain.component';
import { DeleteAccountComponent } from './delete-account/delete-account.component';
import { CountAccountsComponent } from './count-accounts/count-accounts.component';
import { CountAccountInPeriodComponent } from './count-account-in-period/count-account-in-period.component';
import { FindAccountComponent } from './find-account/find-account.component';
import { DatePipe } from '@angular/common';
import { PackMainComponent } from './pack-main/pack-main.component';
import { ShowPackbycostComponent } from './show-packbycost/show-packbycost.component';
import { ShowPackbyidComponent } from './show-packbyid/show-packbyid.component';
import { ShowPackbydaysValidityComponent } from './show-packbydays-validity/show-packbydays-validity.component';
import { ShowPackGrtAmtComponent } from './show-pack-grt-amt/show-pack-grt-amt.component';
import { UpdatePackComponent } from './update-pack/update-pack.component';
import { DeletePackComponent } from './delete-pack/delete-pack.component';
import { ShowPopularPackComponent } from './show-popular-pack/show-popular-pack.component';
import { CustomerLoginComponent } from './customer-login/customer-login.component';
import { RechargeMainComponent } from './recharge-main/recharge-main.component';
import { UpdateRechargeComponent } from './update-recharge/update-recharge.component';
import { RechargeInPeriodCountComponent } from './recharge-in-period-count/recharge-in-period-count.component';
import { RechargePackCountComponent } from './recharge-pack-count/recharge-pack-count.component';
import { RechargeInPeriodRevenueComponent } from './recharge-in-period-revenue/recharge-in-period-revenue.component';
import { RechargesInPeriodComponent } from './recharges-in-period/recharges-in-period.component';
import { CountRechargeComponent } from './count-recharge/count-recharge.component';
import { DescRechargeComponent } from './desc-recharge/desc-recharge.component';
import { AddRechargeComponent } from './add-recharge/add-recharge.component';
import { AdminMainComponent } from './admin-main/admin-main.component';
import { AdminHeaderComponent } from './admin-header/admin-header.component';
import { ServiceMainComponent } from './service-main/service-main.component';
import { AddServiceComponent } from './add-service/add-service.component';
import { CloseRequestComponent } from './close-request/close-request.component';
import { OpenedServiceComponent } from './opened-service/opened-service.component';
import { AdminPackComponent } from './admin-pack/admin-pack.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { AddPackComponent } from './add-pack/add-pack.component';

@NgModule({
  declarations: [
    AppComponent,
    MainLoginComponent,
    LoginButtonsComponent,
    CustomerMainComponent,
    FooterComponent,
    HeaderComponent,
    MainComponent,
    UserMainComponent,
    RegisterUserComponent,
    UserFindIdComponent,
    UserFindUsernameComponent,
    UserUpdateComponent,
    UserDeleteIdComponent,
    AccountmainComponent,
    FindAccountComponent,
    CountAccountInPeriodComponent,
    CountAccountsComponent,
    DeleteAccountComponent,
    PackMainComponent,
    ShowPackbycostComponent,
    ShowPackbyidComponent,
    ShowPackbydaysValidityComponent,
    ShowPackGrtAmtComponent,
    UpdatePackComponent,
    DeletePackComponent,
    ShowPopularPackComponent,
    CustomerLoginComponent,
    AddRechargeComponent,
    DescRechargeComponent,
    CountRechargeComponent,
    RechargesInPeriodComponent,
    RechargeInPeriodRevenueComponent,
    RechargePackCountComponent,
    RechargeInPeriodCountComponent,
    UpdateRechargeComponent,
    RechargeMainComponent,
    AdminMainComponent,
    AdminHeaderComponent,
    ServiceMainComponent,
    AddServiceComponent,
    CloseRequestComponent,
    OpenedServiceComponent,
    AdminPackComponent,
    MainComponent,
    LoginPageComponent,
    AddPackComponent,
    ErrorPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
   HttpClientModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
