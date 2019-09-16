import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChoiceComponent } from './choice.component';
import { ChoiceRoutingModule } from './choice-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [ChoiceComponent],
  imports: [
    CommonModule,
    SharedModule,
    ChoiceRoutingModule
  ]
})
export class ChoiceModule { }
