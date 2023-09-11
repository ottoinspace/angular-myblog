import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { CardProfileComponent } from './components/card-profile/card-profile.component';
import { MenuSearchComponent } from './components/menu-search/menu-search.component';
import { ProfileSectionComponent } from './components/profile-section/profile-section.component';
import { BigCardComponent } from './components/big-card/big-card.component';
import { SmallCardComponent } from './components/small-card/small-card.component';
import { LongCardComponent } from './components/long-card/long-card.component';
import { HomeComponent } from './pages/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuBarComponent,
    CardProfileComponent,
    MenuSearchComponent,
    ProfileSectionComponent,
    BigCardComponent,
    SmallCardComponent,
    LongCardComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
