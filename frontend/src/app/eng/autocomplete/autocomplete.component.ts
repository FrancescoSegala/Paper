import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MatAutocomplete, MatAutocompleteTrigger } from '@angular/material/autocomplete';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component( {
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.css']
} )
export class AutocompleteComponent implements OnInit {


  @Input()
  input = ""

  @Output()
  inputChange = new EventEmitter<string>()

  inputChanged: Subject<string> = new Subject<string>();

  @ViewChild(MatAutocomplete ) autocomplete: MatAutocomplete;


  @Input()
  config: any

  options: any[] = []

  async ngOnInit() {
    this.inputChanged
      .pipe(
        debounceTime( 500 ),
        distinctUntilChanged()
      )
      .subscribe( async model => {

        this.input = model;
        let params = { limit: 5 , no_count : "true", sort : "no_sort" }
        params[this.config.backend.field] = this.input
        this.options = await this.config.backend.loadFn( params );
        this.inputChange.emit( this.input );
      } );
  }


  async search( value ) {
    this.inputChanged.next( this.input )
  }

  display( config ) {
    return config ? ( value ) => config.frontend.displayFn( value, this.options ) : ( value ) => value
  }


  async reset( auto ) {
    this.input = ""
    this.inputChange.emit( this.input );
  }



}
