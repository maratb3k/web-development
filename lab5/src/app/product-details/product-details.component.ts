import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { products } from '../products';
import { CartService } from '../cart.service';
import { laptops } from '../laptops';
import { cameras } from '../cameras';
import { tvs } from '../tv';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product;
  laptop;
  tv;
  camera;

  constructor(private route: ActivatedRoute,  private cartService: CartService) { }

  ngOnInit() {
      // First get the product id from the current route.
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));
    const laptopIdFromRoute = Number(routeParams.get('laptopId'));
    const cameraIdFromRoute = Number(routeParams.get('cameraId'));
    const tvIdFromRoute = Number(routeParams.get('tvId'));

    // Find the product that correspond with the id provided in route.
    this.product = products.find(product => product.id === productIdFromRoute);
    this.laptop = laptops.find(laptop => laptop.id === laptopIdFromRoute);
    this.camera = cameras.find(camera => camera.id === cameraIdFromRoute);
    this.tv = tvs.find(tv => tv.id === tvIdFromRoute);

  }

  addToCart(product) {
    this.cartService.addToCart(product);
    window.alert('Your product has been added to the cart!');
  }

}