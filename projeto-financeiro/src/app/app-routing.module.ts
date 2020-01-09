import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountPageComponent } from './accounts/pages/account-page/account-page.component';


const routes: Routes = [{
  path: '',
  children: [{
    path: '', component: AccountPageComponent
  }]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
