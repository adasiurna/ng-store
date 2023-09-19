import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BehaviorSubject } from 'rxjs';
import { ICart, ICartItem } from '../models/cart.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart = new BehaviorSubject<ICart>({ items: [] });

  constructor(private _snackBar: MatSnackBar) { }

  addToCart(item: ICartItem): void {
    const items = [...this.cart.value.items];

    const itemInCart = items.find(_item => _item.id === item.id);

    if (itemInCart) {
      itemInCart.quantity += 1;
    } else {
      items.push(item);
    }

    this.cart.next({ items });
    this._snackBar.open('1 item added to cart.', 'Ok', { duration: 3000});
    console.log('cart value:', this.cart.value);
  }

  removeOneItemFromCart(item: ICartItem): void {
    const items = [...this.cart.value.items];

    const itemInCart = items.find(_item => _item.id === item.id);

    if (itemInCart && itemInCart.quantity > 0) {
      console.log('ifas');
      itemInCart.quantity -= 1;
    } else {
      console.log('else');
      this._snackBar.open('Cart is empty.', 'Ok', { duration: 3000});
      return;
    }

    this.cart.next({ items });
    this._snackBar.open('1 item removed from cart.', 'Ok', { duration: 3000});
  }

  getTotal(items: Array<ICartItem>): number {
    return items
      .map(item => item.price * item.quantity)
      .reduce((prev, current) => prev + current, 0)
  }

  clearCart(): void {
    this.cart.next({items: []});
    this._snackBar.open('Cart is cleared.', 'Ok', { duration: 3000});
  }

  removeFromCart(item: ICartItem): void {
    const filteredItems = this.cart.value.items.filter(
      _item => _item.id !== item.id
    )
    this.cart.next({ items: filteredItems })
    this._snackBar.open('Items removed from cart.', 'Ok', { duration: 3000});
  }

  addOneItem(item: ICartItem) {

  }
}
