import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DiplomasComponent } from './components/diplomas/diplomas.component';
import {RouterModule} from '@angular/router';
import {ComponentsModule} from "../../components/components.module";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '**', component: DiplomasComponent}
    ]),
    ComponentsModule
  ],
  declarations: [DiplomasComponent]
})
export class DiplomasModule { }
