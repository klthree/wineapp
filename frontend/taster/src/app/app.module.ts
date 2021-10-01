import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HomeMenuComponent } from './home-menu/home-menu.component';
import { NewWineFormComponent } from './new-wine-form/new-wine-form.component';
import { ContentPagesTemplateComponent } from './content-pages-template/content-pages-template.component';
import { NavigationComponent } from './navigation/navigation.component';
import { WineListComponent } from './wine-list/wine-list.component';
import { LoginComponent } from './login/login.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TastedComponent } from './tasted/tasted.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { FormElementComponent } from './form-element/form-element.component';
import { FormElementSelectComponent } from './form-element-select/form-element-select.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeMenuComponent,
    NewWineFormComponent,
    ContentPagesTemplateComponent,
    NavigationComponent,
    WineListComponent,
    LoginComponent,
    TastedComponent,
    WishlistComponent,
    FormElementComponent,
    FormElementSelectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
