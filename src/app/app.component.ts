import { CustomToastrService, ToastrMessageType, ToastrPosition } from './services/ui/custom-toastr.service';
import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
declare var $:any

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ETicaretClient';
  constructor(private toastrService:CustomToastrService){
    toastrService.message("Merhaba","Kerem",{
      messageType:ToastrMessageType.Error,
      position:ToastrPosition.BottomCenter
    })
    toastrService.message("Merhaba","Kerem",{
      messageType:ToastrMessageType.Warning,
      position:ToastrPosition.BottomLeft
    })
    toastrService.message("Merhaba","Kerem",{
      messageType:ToastrMessageType.Success,
      position:ToastrPosition.TopCenter
    })
    toastrService.message("Merhaba","Kerem",{
      messageType:ToastrMessageType.Info,
      position:ToastrPosition.TopRight
    })
  }
}


