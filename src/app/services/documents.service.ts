import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DocumentOutResponse } from '../models/document.out.response.model';
import { DocumentInResponse } from '../models/document.in.response.model';

@Injectable({
  providedIn: 'root'
})
export class DocumentsService {

  private baseOutUrl = 'http://localhost:3000/documents/out';
  private baseInUrl = 'http://localhost:3000/documents/in';

  
  constructor(
    private http: HttpClient
  ) {}

  public getOutDocuments() {
    return this.http.get<Array<string>>(this.baseOutUrl);
  }

  public getInDocuments() {
    return this.http.get<Array<string>>(this.baseInUrl);
  }

  public getOutDoc(doc_name: string) {
    const url = `${this.baseOutUrl}/${doc_name}`;
    return this.http.get<DocumentOutResponse>(url);
  }

  public getInDoc(doc_name: string) {
    const url = `${this.baseInUrl}/${doc_name}`;
    return this.http.get<DocumentInResponse>(url);
  }
}