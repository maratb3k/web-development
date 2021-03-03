import { Component} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { products } from '../products';
import { laptops } from '../laptops';
import { cameras } from '../cameras';
import { tvs } from '../tv';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products = products;
  laptops = laptops;
  cameras = cameras;
  tvs = tvs;
  product;
  laptop;
  camera;
  tv;
  public phoneShow = true;
  public laptopShow = true;
  public cameraShow = true;
  public tvShow = true;
  

  constructor(private route: ActivatedRoute){}
  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }
  ngOnInit() {
      // First get the product id from the current route.
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));

    // Find the product that correspond with the id provided in route.
    this.product = products.find(product => product.id === productIdFromRoute);
  }
  showHidePhone() {
    if(this.phoneShow == true){
      this.phoneShow=false;
    }
    else
        this.phoneShow = true;
  }
  showHideLaptop() {
    if(this.laptopShow == true){
      this.laptopShow=false;
    }
    else
        this.laptopShow = true;
  }
  showHideCamera() {
    if(this.cameraShow == true){
      this.cameraShow=false;
    }
    else
        this.cameraShow = true;
  }
  showHideTv() {
    if(this.tvShow == true){
      this.tvShow=false;
    }
    else
        this.tvShow = true;
  }
  
  likeIt(countOfLike){
    let check:number = countOfLike;
    countOfLike++;
    let normal = document.querySelector('#numoflikes');
    normal.innerHTML = "💗" + countOfLike;
  }
  removeIt(productToRemove){
    let id = productToRemove;
    this.products.splice(id, 1);
    // this.products.forEach( product => delete product.id);
    
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/