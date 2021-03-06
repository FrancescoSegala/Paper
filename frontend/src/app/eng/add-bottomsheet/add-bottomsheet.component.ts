import { ElementRef, Inject, ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { MatBottomSheetRef, MAT_BOTTOM_SHEET_DATA  } from '@angular/material/bottom-sheet';



@Component({
  selector: 'app-add-bottomsheet',
  templateUrl: './add-bottomsheet.component.html',
  styleUrls: ['./add-bottomsheet.component.css']
})
export class AddBottomsheetComponent implements OnInit {

  params = {}

  @ViewChild( 'input_ref' ) input_field: ElementRef;

  constructor(
    @Inject( MAT_BOTTOM_SHEET_DATA ) public config: any,
    private _bottomSheetRef: MatBottomSheetRef<AddBottomsheetComponent>
  ) { }


  ngOnInit(){
  }

  isDisabled(params){
     return this.config.enableBtn ?  ! this.config.enableBtn(params) : false
  }

  async create(){
    await this.config.createFn(this.params)
    if (this.config.focus ){
      this.input_field.nativeElement.focus();
    }
    else {
      this._bottomSheetRef.dismiss();
    }
  }

  toggle( k ){
    this.params[k] = ! this.params[k]
  }

}
