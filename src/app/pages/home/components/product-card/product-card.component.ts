import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IProduct } from 'src/app/models/product.model';
// import 

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html'
})
export class ProductCardComponent {
  @Input()
  fullWidthMode: boolean = false;

  product: IProduct | undefined = {
    id: 1,
    title: "Big Bowl",
    price: 109,
    category: "Bolws",
    description: "Description very nice bowl",
    image: 'https://via.placeholder.com/150',
  };

  @Output()
  addToCart = new EventEmitter();

  onAddToCart(): void {
    this.addToCart.emit(this.product);
  }

}
