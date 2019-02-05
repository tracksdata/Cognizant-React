import {ProductsService} from './products.service';
import {Injectable} from '@angular/core';
import {Resolve} from '@angular/router';

@Injectable()
export class ProductsResolverService implements Resolve<any>{

  constructor(private productsService: ProductsService) {}

  resolve() {
    console.log("resolving..");
    return this.productsService.loadAllProducts()
  }



}
