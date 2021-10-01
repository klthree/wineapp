import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NewWineFormComponent } from './new-wine-form/new-wine-form.component';
import { WineListComponent } from './wine-list/wine-list.component';

const routes: Routes = [
  { path: 'add-new-wine', component: NewWineFormComponent},
  { path: 'wines', component: WineListComponent},
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
