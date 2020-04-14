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
import {DiplomaComponent} from './diploma/diploma.component';
import {RouterModule} from '@angular/router';
import {PaginationComponent} from './pagination/pagination.component';
import {VideoComponent} from './video/video.component';
import {ShowMoreComponent} from './show-more/show-more.component';
import {FbShareComponent} from './fb-share/fb-share.component';
import {JwSocialButtonsModule} from 'jw-angular-social-buttons';

@NgModule({
  imports: [
    CommonModule,
    SwiperModule,
    FormsModule,
    ReactiveFormsModule,
    ClickOutsideModule,
    RouterModule,
    NgxCaptchaModule,
    JwSocialButtonsModule
  ],
  declarations: [SliderComponent, InputComponent, TextareaComponent, DateInputComponent, SelectComponent, AttendButtonComponent, DiplomaComponent, PaginationComponent, VideoComponent, ShowMoreComponent, FbShareComponent],
    exports: [SliderComponent, InputComponent, TextareaComponent, DateInputComponent, SelectComponent, AttendButtonComponent,
        ClickOutsideModule, DiplomaComponent, FbShareComponent]
})
export class ComponentsModule {
}
