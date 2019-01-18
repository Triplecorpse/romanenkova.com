import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicesComponent } from './components/services/services.component';
import {RouterModule} from '@angular/router';
import { ServiceComponent } from './components/service/service.component';
import {ComponentsModule} from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '**', component: ServicesComponent}
    ]),
    ComponentsModule
  ],
  declarations: [ServicesComponent, ServiceComponent]
})
export class ServicesModule { }
