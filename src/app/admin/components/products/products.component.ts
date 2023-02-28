import { ListComponent } from './list/list.component';
import { Create_Product } from './../../../contracts/create_product';
import { HttpClientService } from './../../../services/common/http-client.service';
import { BaseComponent, SpinnerType } from './../../../base/base.component';
import { Component, OnInit, ViewChild } from '@angular/core';
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
   }

   @ViewChild(ListComponent) listComponent:ListComponent
   createdProduct(createdProduct:Create_Product){
    this.listComponent.getProducts()
   }

}
