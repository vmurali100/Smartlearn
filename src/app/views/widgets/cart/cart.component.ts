import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { WidgetsService } from '../widgets.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  @Input() data: any[];
  cartItems: any[];


  constructor(private widgetsService: WidgetsService) { }

  ngOnInit() {
    this.cartItems = this.data;
  }

  trackByFn(index, item) {
    return item.id;
  }

  deleteSystemFromCart(systemSelection) {
    console.log(systemSelection);
    let index = this.cartItems.indexOf(systemSelection);
    this.cartItems.splice(index, 1);
    // this.widgetsService.getCartItemSum(this.cartItems.length);
  }

  submitRequests() {
  }

}
