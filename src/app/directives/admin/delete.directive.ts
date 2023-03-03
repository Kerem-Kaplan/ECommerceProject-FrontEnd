import { NgxSpinnerService } from 'ngx-spinner';
import { BaseComponent, SpinnerType } from './../../base/base.component';
import { ProductService } from 'src/app/services/common/models/product.service';
import { Directive,ElementRef,Renderer2,HostListener, Input, Output, EventEmitter } from '@angular/core';

declare var $:any

@Directive({
  selector: '[appDelete]'
})
export class DeleteDirective {

  constructor(
    private element:ElementRef,
    private _renderer:Renderer2,
    private productService:ProductService,
    private spinner:NgxSpinnerService
    ){
      const img=_renderer.createElement("img")
      img.setAttribute("src","../../../assets/delete.png")
      img.setAttribute("style","cursor:pointer")
      
      _renderer.appendChild(element.nativeElement,img)
     }

     @Input() id:string
     @Output() callback:EventEmitter<any> =new EventEmitter()

     @HostListener("click")
     async onClick(){
      this.spinner.show(SpinnerType.BallAtom)
      const td:HTMLTableColElement=this.element.nativeElement
      await this.productService.delete(this.id)
      $(td.parentElement).fadeOut(2000,()=>{
        this.callback.emit()
      })
      this.spinner.hide(SpinnerType.BallAtom,2000)

      
     }

}
