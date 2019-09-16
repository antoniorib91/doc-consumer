import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { DocumentsService } from '../../../services/documents.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-document-list',
  templateUrl: './document-list.component.html',
  styleUrls: ['./document-list.component.scss']
})
export class DocumentListComponent implements OnInit, OnDestroy {

  public dir: string;
  public files: string[] = [];
  private dirName: string
  private subscription: Subscription;

  constructor(
    private router: Router,
    private service: DocumentsService
  ) { 
    this.dir = this.router.url.includes('out') ? 'data/out' : 'data/in';
    this.dirName = this.router.url.includes('out') ? 'out' : 'in';
  }

  ngOnInit() {
    if(this.dirName === 'out') {
      this.initOutContent();
    }else {
      this.initInContent();
    }
  }

  ngOnDestroy() {
    if(this.subscription && !this.subscription.closed) {
      this.subscription.unsubscribe();
    }
  }

  private initOutContent() {
    this.subscription = this.service.getOutDocuments().subscribe(
      res => this.files = res,
      err => console.log('err',err)
    )
  }

  private initInContent() {
    this.subscription = this.service.getInDocuments().subscribe(
      res => this.files = res,
      err => console.log('err', err)
    )
  }

}
