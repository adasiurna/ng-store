import { Component, OnInit } from '@angular/core';
import { ICart, ICartItem } from 'src/app/models/cart.model';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html'
})
export class CartComponent implements OnInit {
  cart: ICart = { items: [
    {
      product: 'https://via.placeholder.com/150',
      name: 'bowl',
      price: 25,
      quantity: 3,
      id: 1,
    },
    {
      product: 'https://via.placeholder.com/150',
      name: 'bowl',
      price: 25,
      quantity: 1,
      id: 1,
    },
    {
      product: 'https://via.placeholder.com/150',
      name: 'bowl',
      price: 25,
      quantity: 1,
      id: 1,
    },
    {
      product: 'https://via.placeholder.com/150',
      name: 'bowl',
      price: 25,
      quantity: 1,
      id: 1,
    },
  ]};

  dataSource: Array<ICartItem> = [];
  displayedColumns: Array<string> = [
    'product',
    'name',
    'price',
    'quantity',
    'total',
    'action'
  ]

  constructor( private cartService: CartService) {}

  ngOnInit(): void {
    this.cartService.cart.subscribe(_cart => {
      this.cart = _cart;
      this.dataSource = this.cart.items;
    })
  }

  getTotal(items: Array<ICartItem>): number {
    return this.cartService.getTotal(items);
  }

  onClearCart(): void {
    this.cartService.clearCart();
  }

  onRemoveFromCart(item: ICartItem): void {
    this.cartService.removeFromCart(item);
  }

  onAddToCart(item: ICartItem): void {
    this.cartService.addToCart(item);
  }

  onRemoveOneItemFromCart(item: ICartItem): void {
    this.cartService.removeOneItemFromCart(item);
  }
}
