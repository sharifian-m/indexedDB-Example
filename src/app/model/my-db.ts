
import { openDB, DBSchema } from 'idb';

    export interface MyDB extends DBSchema {
  'database-name': {
    key: string;
    value: number;
  };
  products: {
    value: {
      name: string;
      price: number;
      productCode: string;
    };
    key: string;
    indexes: { 'by-price': number };
  };
}