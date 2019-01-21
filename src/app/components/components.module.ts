import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SliderComponent} from './slider/slider.component';
import {SwiperModule} from 'ngx-swiper-wrapper';
import {InputComponent} from './input/input.component';
import {TextareaComponent} from './textarea/textarea.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ClickOutsideModule} from 'ng4-click-outside';
import {DateInputComponent} from './date-input/date-input.component';
import {SelectComponent} from './select/select.component';
import {AttendButtonComponent} from './attend-button/attend-button.component';
import {NgxCaptchaModule} from 'ngx-captcha';
import {DiplomaComponent} from "./diploma/diploma.component";
import {RouterModule} from "@angular/router";

@NgModule({
  imports: [
    CommonModule,
    SwiperModule,
    FormsModule,
    ReactiveFormsModule,
    ClickOutsideModule,
    RouterModule,
    NgxCaptchaModule.forRoot({
      reCaptcha2SiteKey: '6Lc2zmsUAAAAAA0vgv4qoXcREi9LkfWwn1i0Jyil'
    })
  ],
  declarations: [SliderComponent, InputComponent, TextareaComponent, DateInputComponent, SelectComponent, AttendButtonComponent, DiplomaComponent],
  exports: [SliderComponent, InputComponent, TextareaComponent, DateInputComponent, SelectComponent, AttendButtonComponent,
    ClickOutsideModule, DiplomaComponent]
})
export class ComponentsModule {
}
