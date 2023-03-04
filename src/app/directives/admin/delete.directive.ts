import { HttpErrorResponse } from '@angular/common/http';
import { AlertifyService, MessageType, Position } from './../../services/admin/alertify.service';
import { HttpClientService } from './../../services/common/http-client.service';
import { DeleteDialogComponent, DeleteState } from './../../dialogs/delete-dialog/delete-dialog.component';
import { NgxSpinnerService } from 'ngx-spinner';
import { ProductService } from 'src/app/services/common/models/product.service';
import { Directive,ElementRef,Renderer2,HostListener, Input, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SpinnerType } from 'src/app/base/base.component';

declare var $:any

@Directive({
  selector: '[appDelete]'
})
export class DeleteDirective {

  constructor(
    private element:ElementRef,
    private _renderer:Renderer2,
    private httpClientService:HttpClientService,
    private spinner:NgxSpinnerService,
    public dialog:MatDialog,
    private alertifyService:AlertifyService
    ){
      const img=_renderer.createElement("img")
      img.setAttribute("src","../../../assets/delete.png")
      img.setAttribute("style","cursor:pointer")
      
      _renderer.appendChild(element.nativeElement,img)
     }

     @Input() id:string
     @Input() controller:string
     @Output() callback:EventEmitter<any> =new EventEmitter()

     @HostListener("click")
     async onClick(){
      this.openDialog(async()=>{
        this.spinner.show(SpinnerType.BallAtom)
        const td:HTMLTableColElement=this.element.nativeElement
      this.httpClientService.delete({
        controller:this.controller
      },this.id).subscribe(data=>{

        $(td.parentElement).animate({
          opacity:0,
          left:"+=50",
          height:"toggle"
        },1000,()=>{
          this.callback.emit()
          this.spinner.hide(SpinnerType.BallAtom,1500)
          this.alertifyService.message("Ürün başarıyla silinmiştir",{
            dismissOthers:true,
            messageType:MessageType.Success,
            position:Position.TopCenter
          })
        })
      },(errorResponse:HttpErrorResponse)=>{
        this.spinner.hide(SpinnerType.BallAtom,1500)
        this.alertifyService.message("Hata alındı ve ürün silinmedi",{
          dismissOthers:true,
          messageType:MessageType.Error,
          position:Position.TopCenter
        })
      })    
    })
      
      
  }

     openDialog(afterClosed:any): void {
      const dialogRef = this.dialog.open(DeleteDialogComponent, {
        width:'250px',
        data: DeleteState.Yes,
      });
  
      dialogRef.afterClosed().subscribe(result => {
        if(result==DeleteState.Yes){
          afterClosed()
        }
       
      });
    }

}
