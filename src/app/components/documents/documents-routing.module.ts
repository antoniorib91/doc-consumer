import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DocumentListComponent } from './document-list/document-list.component';
import { DocumentComponent } from './document/document.component';


const routes: Routes = [
  {
    path: 'in',
    component: DocumentListComponent
  },
  {
    path: 'out',
    component: DocumentListComponent
  },
  {
    path: 'out/:id',
    component: DocumentComponent
  },
  {
    path: 'in/:id',
    component: DocumentComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DocumentsRoutingModule { }
