import { Client } from './client.model';
import { Saleman } from './saleman.model';
import { Sale } from './sale.model';
import { Info } from './info.model';

export interface DocumentOutResponse {
  clients: Array<Client>;
  sellers: Array<Saleman>;
  sales: Array<Sale>;
  infos: Info;
}