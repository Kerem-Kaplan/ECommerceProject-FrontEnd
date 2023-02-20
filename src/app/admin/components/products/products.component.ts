import { Product } from './../../../contracts/product';
import { HttpClientService } from './../../../services/common/http-client.service';
import { BaseComponent, SpinnerType } from './../../../base/base.component';
import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent extends BaseComponent implements OnInit {


  constructor(spinner:NgxSpinnerService,private httpClientService:HttpClientService){
    super(spinner);
  }
  
  ngOnInit(): void {
    this.showSpinner(SpinnerType.BallAtom)
    
    
    
    this.httpClientService.get<Product[]>({
      controller:"products"
    }).subscribe(data=>{console.log(data) })

    // this.httpClientService.post({
    //   controller:"products"
    // },{
    //   name:"Kalem",
    //   stock:100,
    //   price:15
    // }).subscribe()

    // this.httpClientService.put({
    //   controller:"products"
    // },{
    //   id:"34ee4f96-af79-42ed-be79-7531f801e702",
    //   name:"Silgi",
    //   stock:15,
    //   price:31
    // }).subscribe()
    

    // this.httpClientService.delete({
    //   controller:"products"
    // },"34ee4f96-af79-42ed-be79-7531f801e702"
    // ).subscribe()


  //   this.httpClientService.get({
  //     fullEndpoint:"https://jsonplaceholder.typicode.com/posts"
  //   }).subscribe(data=>console.log(data))


   }

}
