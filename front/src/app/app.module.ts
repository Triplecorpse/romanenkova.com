import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AppRoutingModule} from './app-routing.module';

import { AppComponent } from './app.component';
import { ContactsComponent } from './conponents/contacts/contacts.component';
import { HeaderComponent } from './conponents/header/header.component';
import { FooterComponent } from './conponents/footer/footer.component';
import { AttendButtonComponent } from './conponents/attend-button/attend-button.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactsComponent,
    HeaderComponent,
    FooterComponent,
    AttendButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
