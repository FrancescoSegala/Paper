import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { BusService, DO_EXPORT_EVENT, DO_SEARCH_EVENT } from '../../bus.service';
import { end_of_day } from '../../util';

@Component( {
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
} )
export class SearchFormComponent implements OnInit, AfterViewInit {

  @Input() params

  @Input() config

  @Input() do_export?

  @Input() service_name? : string;

  @ViewChild( "picker" ) picker;

  regex_validation = {};
  enable_search = false;

  constructor( private bus: BusService ) { }

  ngOnInit() {
    console.log("init", this.regex_validation)
    console.log("init2",this.enable_search)
    this.params = JSON.parse( sessionStorage.getItem( window.location.href +  '_' + this.service_name  ) || JSON.stringify( this.params ) );
  }

  ngAfterViewInit() {
    this.search()
  }

  search() {
    this.params.offset = 0
    this.params.limit = this.params.limit ?? 20
    
    sessionStorage.setItem( window.location.href +  '_' + this.service_name, JSON.stringify( this.params ) );
    this.bus.publish( this.service_name ? this.service_name + "_" + DO_SEARCH_EVENT : DO_SEARCH_EVENT, this.params )
  }

  export() {
    this.bus.publish( DO_EXPORT_EVENT )
  }

  reset_date( date ) {
    this.params[date.start] = ""
    this.params[date.end] = ""
  }

  format_date( label ) {
    this.params[label] = end_of_day( this.params[label] )
  }

  set_value( event, value, name ) {
    this.params[name] = this.params[name] || []
    if ( event.checked ) {
      this.params[name].push( value )
    }
    else {
      this.params[name] = this.params[name].filter( e => e != value )
    }
  }

  validate(e, field){
    let regex: RegExp = /^[A-Za-z0-9_]{3,}$/;
    console.log("e", e.length)
    // this.checkBtn(e, field);
    
    if(regex.test(e) || e.length == 0){
      console.log("if lenth", Object.keys(this.regex_validation).length)
      console.log("if regex", this.regex_validation)
      console.log("if enable", this.enable_search)
      console.log("if e", e.lenth)
      console.log("if field", field)
      delete this.regex_validation[field];
      this.enable_search = false;
    } else {
      console.log("else lenth", Object.keys(this.regex_validation).length)
      console.log("else regex", this.regex_validation)
      console.log("else enable", this.enable_search)
      console.log("else e", e.length)
      console.log("else field", field)
      this.regex_validation[field] = true
      this.enable_search = true;
    }
  }

  checkBtn(e, field){
    if(e.length == 0){
      console.log("primo lenth", Object.keys(this.regex_validation).length)
      console.log("primo regex", this.regex_validation)
      console.log("primo enable", this.enable_search)
      console.log("primo e", e.length)
      console.log("primo field", field)
      // this.regex_validation[field] = true
      delete this.regex_validation[field];
      this.enable_search = false;
    }
  }

  invert_checkbox_logic(event, value, name, field){
    field = field.substring(6);
    this.config.checkbox.field = field;
    console.log(this.config);
    this.params[name] = this.params[name] || []
    value = !value;
    if ( event.checked ) {
      return this.params[name].push( value )
    }
    else {
      return this.params[name] = this.params[name].filter( e => e != value )
    }
  }

}
