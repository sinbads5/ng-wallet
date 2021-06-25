import { Discount } from './discount';
import { Item } from './item';
import { Tax } from './tax';

export class Info {

  // Items
  items?:             Item[];

  // Sub-total
  subTotalPrice?:     string;

  // Tax
  taxes?:             Tax[];

  // Discount
  discount?:          Discount;

  totalPriceStatus!:  string;
  totalPriceLabel!:   string;
  totalPrice!:        string;
  currencyCode!:      string;
  countryCode!:       string;

}
