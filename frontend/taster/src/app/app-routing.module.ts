import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NewWineFormComponent } from './forms/new-wine-form/new-wine-form.component';
// import { TastedComponent } from './tasted/tasted.component';
import { WineListComponent } from './wine-list/wine-list.component';
import { NewAssessmentFormComponent } from './forms/new-assessment-form/new-assessment-form.component';
import { WineDetailComponent } from './wine-detail/wine-detail.component';
// import { WishlistComponent } from './wishlist/wishlist.component';

const routes: Routes = [
  { path: 'add-new-wine', component: NewWineFormComponent},
  { path: 'wines', component: WineListComponent},
  // { path: 'tasted', component: TastedComponent},
  // { path: 'wishlist', component: WishlistComponent},
  { path: 'login', component: LoginComponent },
  { path: 'new-assessment', component: NewAssessmentFormComponent},
  { path: 'wine/:id', component: WineDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
