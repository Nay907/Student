import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from "./component/home/home.component";
import { CreateComponent } from "./component/create/create.component";
import { ReadComponent } from "./component/read/read.component";

const routes: Routes = [{ path: "", component: HomeComponent, title: 'Home-Page'},
{ path: "create", component: CreateComponent, title: 'Student Create'},
{ path: "read", component: ReadComponent, title: 'Student Data'}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
