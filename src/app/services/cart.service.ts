import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private storageKey = 'cart';

  constructor() {}

  // getCart(): number {
  //   const cartValue = localStorage.getItem(this.storageKey);
  //   return cartValue ? parseInt(cartValue, 10) : 1;
  // }

  // setCart(value: any): void {
  //   const cartArray=Object.values(value);
  //   localStorage.setItem(this.storageKey, cartArray.toString());
  // }
}
