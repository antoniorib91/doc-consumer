import { Component, OnInit, OnDestroy } from '@angular/core';
import { Client } from 'src/app/models/client.model';
import { Info } from 'src/app/models/info.model';
import { Saleman } from 'src/app/models/saleman.model';
import { Sale } from 'src/app/models/sale.model';
import { DocumentsService } from 'src/app/services/documents.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { DocumentOutResponse } from 'src/app/models/document.out.response.model';
import { DocumentInResponse } from 'src/app/models/document.in.response.model';

@Component({
  selector: 'app-document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.scss']
})
export class DocumentComponent implements OnInit, OnDestroy {

  public clients: Array<Client>;
  public info: Info;
  public sellers: Array<Saleman>;
  public sales: Array<Sale>;
  public lines: Array<string>;
  public fileName: string;
  public dirName: string;

  private subscription: Subscription;

  constructor(
    private service: DocumentsService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.fileName = this.activatedRoute.snapshot.params.id;
    this.dirName = this.activatedRoute.snapshot.url.toString().includes('out') ? 'out' : 'in'; 
    this.initContent();
  }

  ngOnDestroy() {
    if(this.subscription && !this.subscription.closed) {
      this.subscription.unsubscribe();
    }
  }

  private initContent() {
    if(this.dirName === 'out') {
      this.initContentOut();
    } else {
      this.initContentIn();
    }
  }

  private initContentOut() {
    this.subscription = this.service.getOutDoc(this.fileName).subscribe(
      res => this.handleOutResponse(res),
      err => console.log('error ', err)
    )
  }

  private initContentIn() {
    this.subscription = this.service.getInDoc(this.fileName).subscribe(
      res => this.handleInResponse(res),
      err => console.log('error ', err)
    )
  }

  private handleOutResponse(res: DocumentOutResponse) {
    this.clients = res.clients;
    this.sellers = res.sellers;
    this.sales = res.sales;
    this.info = res.infos;
  }

  private handleInResponse(res: DocumentInResponse) {
    this.lines = res.lines;
  }

}
