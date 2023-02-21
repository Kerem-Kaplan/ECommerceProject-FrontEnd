import { Create_Product } from '../../../contracts/create_product';
import { HttpClientService } from './../http-client.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor( private httpClientService:HttpClientService) {}

  createProduct(product:Create_Product,succesCallBack?:any){
    this.httpClientService.post({
      controller:"products"
    },product).subscribe(result=>{
      succesCallBack()
      })
  }

}