import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NewWineFormComponent } from './new-wine-form/new-wine-form.component';
import { TastedComponent } from './tasted/tasted.component';
import { WineListComponent } from './wine-list/wine-list.component';
import { WishlistComponent } from './wishlist/wishlist.component';

const routes: Routes = [
  { path: 'add-new-wine', component: NewWineFormComponent},
  { path: 'wines', component: WineListComponent},
  { path: 'tasted', component: TastedComponent},
  { path: 'wishlist', component: WishlistComponent},
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
