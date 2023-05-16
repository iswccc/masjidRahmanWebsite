import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SharedComponent } from './components/shared/shared.component';
import { HeaderComponent } from './components/header/header.component';
import { TimeBlockComponent } from './components/time-block/time-block.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProgramsComponent } from './components/programs/programs.component';
import { ContactComponent } from './components/contact/contact.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DonateComponent } from './components/donate/donate.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SharedComponent,
    HeaderComponent,
    TimeBlockComponent,
    FooterComponent,
    ProgramsComponent,
    ContactComponent,
    DonateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
