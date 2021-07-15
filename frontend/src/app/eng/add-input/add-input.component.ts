import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component( {
  selector: 'app-add-input',
  templateUrl: './add-input.component.html',
  styleUrls: ['./add-input.component.css']
} )
export class AddInputComponent implements OnInit {

  @Input()
  create: any

  @Input()
  placeholder: any

  @Input()
  title: any

  field: any = ""

  @ViewChild( 'input_id' ) input_id: ElementRef;

  constructor( ) { }

  ngOnInit(): void {
  }

  submit() {
    this.create( this.field );
    this.field = "";
    this.input_id.nativeElement.focus();
  }

}
