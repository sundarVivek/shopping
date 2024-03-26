import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  productApi: string = 'https://dummyjson.com/products';
  products: any;
  cartCount: any;
  private cartItemsSubject: any = new BehaviorSubject<any[]>([]);
  constructor(private http: HttpClient) { }

  getAllProducts() {
    return this.http.get(this.productApi);
  }
  addToCart(item: any) {
    const currentItems: any = this.cartItemsSubject.getValue();
    const updatedItems: any = [...currentItems, item];
    this.cartItemsSubject.next(updatedItems);
    localStorage.setItem('cartItems', JSON.stringify(updatedItems));
  }
  getCartItems() {
    return this.cartItemsSubject.asObservable();
  }
}
