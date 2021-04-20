import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ChangeSettingComponent} from './change-setting/change-setting.component'
import {UsersComponent} from './users/users.component'
const routes: Routes = [
  {
    path:"",
    component:UsersComponent 
  },
  {
    path:'users',
    component:ChangeSettingComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[ChangeSettingComponent,UsersComponent]
