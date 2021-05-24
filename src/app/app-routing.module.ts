import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountmainComponent } from './accountmain/accountmain.component';
import { AddPackComponent } from './add-pack/add-pack.component';
import { AddRechargeComponent } from './add-recharge/add-recharge.component';
import { AddServiceComponent } from './add-service/add-service.component';
import { AdminMainComponent } from './admin-main/admin-main.component';
import { AdminPackComponent } from './admin-pack/admin-pack.component';
import { CloseRequestComponent } from './close-request/close-request.component';
import { CountAccountInPeriodComponent } from './count-account-in-period/count-account-in-period.component';
import { CountAccountsComponent } from './count-accounts/count-accounts.component';
import { CountRechargeComponent } from './count-recharge/count-recharge.component';
import { CustomerLoginComponent } from './customer-login/customer-login.component';
import { CustomerMainComponent } from './customer-main/customer-main.component';
import { DeleteAccountComponent } from './delete-account/delete-account.component';
import { DeletePackComponent } from './delete-pack/delete-pack.component';
import { DescRechargeComponent } from './desc-recharge/desc-recharge.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { FindAccountComponent } from './find-account/find-account.component';
import { MainLoginComponent } from './home main/main-login.component';
import { LoginButtonsComponent } from './login-buttons/login-buttons.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { MainComponent } from './main/main.component';
import { OpenedServiceComponent } from './opened-service/opened-service.component';
import { PackMainComponent } from './pack-main/pack-main.component';
import { RechargeInPeriodCountComponent } from './recharge-in-period-count/recharge-in-period-count.component';
import { RechargeInPeriodRevenueComponent } from './recharge-in-period-revenue/recharge-in-period-revenue.component';
import { RechargeMainComponent } from './recharge-main/recharge-main.component';
import { RechargePackCountComponent } from './recharge-pack-count/recharge-pack-count.component';
import { RechargesInPeriodComponent } from './recharges-in-period/recharges-in-period.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { ServiceMainComponent } from './service-main/service-main.component';
import { ShowPackGrtAmtComponent } from './show-pack-grt-amt/show-pack-grt-amt.component';
import { ShowPackbycostComponent } from './show-packbycost/show-packbycost.component';
import { ShowPackbydaysValidityComponent } from './show-packbydays-validity/show-packbydays-validity.component';
import { ShowPackbyidComponent } from './show-packbyid/show-packbyid.component';
import { ShowPopularPackComponent } from './show-popular-pack/show-popular-pack.component';
import { UpdatePackComponent } from './update-pack/update-pack.component';
import { UpdateRechargeComponent } from './update-recharge/update-recharge.component';
import { UserDeleteIdComponent } from './user-delete-id/user-delete-id.component';
import { UserFindIdComponent } from './user-find-id/user-find-id.component';
import { UserFindUsernameComponent } from './user-find-username/user-find-username.component';
import { UserMainComponent } from './user-main/user-main.component';
import { UserUpdateComponent } from './user-update/user-update.component';

const routes: Routes = [
  {
    path:'login', component:LoginButtonsComponent
  },
  {
    path:'customer-main', component:CustomerMainComponent
  },
  {
    path:'user-main', component:UserMainComponent
  },
  {
    path:'find-user', component:UserFindIdComponent 
  },
  {
    path:'find-user-username', component:UserFindUsernameComponent 
  },
  {
    path:'delete-userId', component:UserDeleteIdComponent
  },
{
    path:'register-user', component:RegisterUserComponent
  },
 {
      path:'user-update', component:UserUpdateComponent
  },
  {
    path:'', component:MainLoginComponent
},
{
  path:'account-main', component:AccountmainComponent
},
{
  path:'find-acc', component:FindAccountComponent
},
{
  path:'countInPeriod', component:CountAccountInPeriodComponent
},
{
  path:'accountCount', component:CountAccountsComponent
},
{
  path:'delete-account', component:DeleteAccountComponent
},
{
  path:'pack-main', component:PackMainComponent
},
{
  path:'add-pack', component:AddPackComponent
},

{
  path:'show-packbycost', component:ShowPackbycostComponent
},
{
  path:'show-packbyid', component:ShowPackbyidComponent
},
{
  path:'show-packbydaysValidity', component:ShowPackbydaysValidityComponent
},
{
  path:'show-packGreaterAmt', component:ShowPackGrtAmtComponent
},
{
  path:'update-pack', component:UpdatePackComponent
},
{
  path:'delete-pack', component:DeletePackComponent
},
{
  path:'show-popularPacks', component:ShowPopularPackComponent
},
{
  path:'customer-login', component:CustomerLoginComponent
},
{
  path:'recharge-main', component:RechargeMainComponent
},
 {
    path:'new-recharge', component:AddRechargeComponent
},
{
  path:'desc-recharge', component:DescRechargeComponent
},
{
  path:'count-recharge', component:CountRechargeComponent
},
{
  path:'recharge-in-period', component:RechargesInPeriodComponent
},
{
  path:'recharge-in-period-revenue',component:RechargeInPeriodRevenueComponent
},
{
  path:'recharge-pack-count',component:RechargePackCountComponent
},
{
  path:'recharge-in-period-count',component:RechargeInPeriodCountComponent
},
{
  path:'update-recharge', component:UpdateRechargeComponent
},
{
  path:'admin-main', component:AdminMainComponent
},
{
  path:'service-main', component:ServiceMainComponent
},

{
  path:'add-service', component:AddServiceComponent
},
{
  path:'close-service', component:CloseRequestComponent
},
{
  path:'opened-service', component:OpenedServiceComponent
},
{
  path:'pack-admin', component:AdminPackComponent
},
{
  path:'customer-home-main', component:MainComponent
},
{
path:'login-page', component:LoginPageComponent
},
{
  path:'', component:MainLoginComponent
},
{
  path:'error', component:ErrorPageComponent
},
{
  path:'**', redirectTo:'/error'
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
