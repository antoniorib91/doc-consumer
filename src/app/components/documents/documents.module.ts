import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DocumentsRoutingModule } from './documents-routing.module';
import { DocumentListComponent } from './document-list/document-list.component';
import { DocumentComponent } from './document/document.component';
import { SharedModule } from './../../shared/shared.module';


@NgModule({
  declarations: [
    DocumentListComponent, 
    DocumentComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    DocumentsRoutingModule
  ]
})
export class DocumentsModule { }
