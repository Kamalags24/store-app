import { Component, OnInit } from '@angular/core'; 
import { ActivatedRoute } from '@angular/router';
import { Products, products } from '../products';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent  implements OnInit {
  product?: Products;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void{
    //First get the product id from the current route.
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));

    //Find the product that correspond with the id provided in route.
    this.product = products.find(product => product.id === productIdFromRoute)

  }
}
