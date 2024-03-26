import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnDestroy {
  cartCount: any;
  private cartCountSubscription!: Subscription;
  constructor(private route: Router, private productService: ProductService) { }

  ngOnInit(): void {
    this.getCartCount();
  }
  openCart() {
    this.route.navigate(['/cart'])
  }
  getCartCount() {
    this.cartCount = localStorage.getItem('cartCount');
    console.log("carcf", this.cartCount)
  }
  logout() {
    localStorage.removeItem('cartItems');
    this.productService.getCartItems();
  }
  ngOnDestroy(): void {
    this.cartCountSubscription.unsubscribe();
  }
}
