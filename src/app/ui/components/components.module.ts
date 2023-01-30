import { BasketModule } from './baskets/baskets.module';
import { HomeModule } from './home/home.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsModule } from './products/products.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ProductsModule,
    HomeModule,
    BasketModule
  ]
})
export class ComponentsModule { }
