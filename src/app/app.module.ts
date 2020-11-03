import {BrowserModule, BrowserTransferStateModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';

import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {IndexModule} from './pages/_index/index.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {PageDataGuardService} from './page-data-guard.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    IndexModule,
    BrowserAnimationsModule,
    BrowserTransferStateModule
  ],
  providers: [PageDataGuardService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
