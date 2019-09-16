import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CardChoiceComponent } from './components/card-choice/card-choice.component';
import { FileIconComponent } from './components/file-icon/file-icon.component';

@NgModule({
  declarations: [
    NavbarComponent,
    CardChoiceComponent,
    FileIconComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    NavbarComponent,
    CardChoiceComponent,
    FileIconComponent
  ]
})
export class SharedModule { }
