import { Component, Input } from '@angular/core';
import { ProductRepresentation } from '../services/api/models/product-representation';

@Component({
  selector: 'app-product-details',
  standalone: false,
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss'
})
export class ProductDetailsComponent {
  @Input()
  product: ProductRepresentation = {};
}
