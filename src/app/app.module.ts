import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { ServiceMainComponent } from './service-main/service-main.component';
import { HomeMainComponent } from './home-main/home-main.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AddServiceComponent } from './add-service/add-service.component';
import { CloseRequestComponent } from './close-request/close-request.component';
import { HttpClientModule } from '@angular/common/http';
import { OpenedServiceComponent } from './opened-service/opened-service.component';
import { UserFindIdComponent } from './user-find-id/user-find-id.component';
import { UserFindUsernameComponent } from './user-find-username/user-find-username.component';
import { UserDeleteIdComponent } from './user-delete-id/user-delete-id.component';
import { AccountmainComponent } from './accountmain/accountmain.component';
import { FindAccountComponent } from './find-account/find-account.component';
import { UserMainComponent } from './user-main/user-main.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { CountAccountInPeriodComponent } from './count-account-in-period/count-account-in-period.component';
import { CountAccountsComponent } from './count-accounts/count-accounts.component';
import { DeleteAccountComponent } from './delete-account/delete-account.component';
import { DatePipe } from '@angular/common';
import { UserUpdateComponent } from './user-update/user-update.component';
import { AddRechargeComponent } from './add-recharge/add-recharge.component';
import { DescRechargeComponent } from './desc-recharge/desc-recharge.component';
import { CountRechargeComponent } from './count-recharge/count-recharge.component';
import { RechargesInPeriodComponent } from './recharges-in-period/recharges-in-period.component';
import { RechargeInPeriodRevenueComponent } from './recharge-in-period-revenue/recharge-in-period-revenue.component';
import { RechargePackCountComponent } from './recharge-pack-count/recharge-pack-count.component';
import { RechargeInPeriodCountComponent } from './recharge-in-period-count/recharge-in-period-count.component';
import { UpdateRechargeComponent } from './update-recharge/update-recharge.component';
import { PackMainComponent } from './pack-main/pack-main.component';
import { AddPackComponent } from './add-pack/add-pack.component';
import { ShowPackbycostComponent } from './show-packbycost/show-packbycost.component';
import { ShowPackbyidComponent } from './show-packbyid/show-packbyid.component';
import { ShowPackbydaysValidityComponent } from './show-packbydays-validity/show-packbydays-validity.component';
import { ShowPackGrtAmtComponent } from './show-pack-grt-amt/show-pack-grt-amt.component';
import { UpdatePackComponent } from './update-pack/update-pack.component';
import { DeletePackComponent } from './delete-pack/delete-pack.component';
import { ShowPopularPackComponent } from './show-popular-pack/show-popular-pack.component';
import { RechargeMainComponent } from './recharge-main/recharge-main.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { AdminMainComponent } from './admin-main/admin-main.component';
import { ErrorPageComponent } from './error-page/error-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent, 
    MainComponent,
    ServiceMainComponent,
    HomeMainComponent,
    AddServiceComponent,
    CloseRequestComponent,
    OpenedServiceComponent,
    UserFindIdComponent,
    UserFindUsernameComponent,
    UserDeleteIdComponent,
    AccountmainComponent,
    FindAccountComponent,
    UserMainComponent,
    RegisterUserComponent,
    CountAccountInPeriodComponent,
    CountAccountsComponent,
    DeleteAccountComponent,
    UserUpdateComponent,
    AddRechargeComponent,
    DescRechargeComponent,
    CountRechargeComponent,
    RechargesInPeriodComponent,
    RechargeInPeriodRevenueComponent,
    RechargePackCountComponent,
    RechargeInPeriodCountComponent,
    UpdateRechargeComponent,
    PackMainComponent,
    AddPackComponent,
    ShowPackbycostComponent,
    ShowPackbyidComponent,
    ShowPackbydaysValidityComponent,
    ShowPackGrtAmtComponent,
    UpdatePackComponent,
    DeletePackComponent,
    ShowPopularPackComponent,
    RechargeMainComponent,
    AdminMainComponent,
    LoginPageComponent,ErrorPageComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
