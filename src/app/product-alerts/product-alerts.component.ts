import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Products } from '../products';



@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrl: './product-alerts.component.css'
})
export class ProductAlertsComponent {
  @Input() products!: Products;
  @Output() notify = new EventEmitter();

  
}
