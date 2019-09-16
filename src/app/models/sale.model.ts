import { Item } from './item.model';

export interface Sale {
  id: string;
  saleId: string;
  items: Array<Item>;
  salesmanName: string;
  saleAmount: number;
}
