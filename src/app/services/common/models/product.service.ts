import { List_Product } from './../../../contracts/list_product';
import { Create_Product } from '../../../contracts/create_product';
import { HttpClientService } from './../http-client.service';
import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor( private httpClientService:HttpClientService) {}

  createProduct(product:Create_Product,succesCallBack?:any, errorCallBack?:(errorMessage:string)=>void){
    this.httpClientService.post({
      controller:"products"
    },product).subscribe(result=>{
      succesCallBack()
      },(errorResponse:HttpErrorResponse)=>{
        const _error:Array<{key:string,value:Array<string>}>=errorResponse.error
        let message="";
        _error.forEach((v,index)=>{
          v.value.forEach((_v,_index)=>{
            message+=`${_v}<br>`
          })
        })
        errorCallBack(message);
      })
  }

  async listProduct(page:number=0,size:number=5,succesCallBack?:()=>void,errorCallBack?:(erroMessage:string)=>void):Promise<{totalCount:number,products:List_Product[]}>{
    const promiseData:Promise<{totalCount:number,products:List_Product[]}>= this.httpClientService.get<{totalCount:number,products:List_Product[]}>({
      controller:"products",
      queryString:`page=${page}&size=${size}`
    }).toPromise()

    promiseData.then(d=>succesCallBack())
    .catch((errorResponse:HttpErrorResponse)=> errorCallBack(errorResponse.message))

    return await promiseData
  }

}
