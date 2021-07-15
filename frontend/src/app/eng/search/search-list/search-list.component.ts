import { Component, Input, OnDestroy, OnInit} from '@angular/core';
import { BusService, DO_SEARCH_EVENT, RELOAD_EVENT } from '../../bus.service';
import { distance_from_bottom } from '../../util';

@Component( {
  selector: 'app-search-list',
  templateUrl: './search-list.component.html',
  styleUrls: ['./search-list.component.css']
} )
export class SearchListComponent implements OnInit, OnDestroy {

  @Input() debug?= false

  @Input() load

  @Input() config

  @Input() navigate

  @Input() color_class

  @Input() service_name? : string;

  scrollEventListener: EventListenerOrEventListenerObject;

  list = []

  params: any = { offset: 0, limit: 20 }

  constructor( private bus: BusService ) { }

  ngOnDestroy(): void {
    window.removeEventListener( "scroll", this.scrollEventListener )
    this.bus.unsubscribe( this.service_name ? this.service_name + "_" + DO_SEARCH_EVENT : DO_SEARCH_EVENT )
    this.bus.unsubscribe( RELOAD_EVENT )
  }

  async ngOnInit() {
    this.scrollEventListener = ( async () => distance_from_bottom() == 0 && await this.incrementList() ).bind( this )
    //window.addEventListener( "scroll", this.scrollEventListener )
    this.bus.subscribe( this.service_name ? this.service_name + "_" + DO_SEARCH_EVENT : DO_SEARCH_EVENT, this.search.bind( this ) )
    this.bus.subscribe( RELOAD_EVENT, this.search.bind( this ) )
  }

  async incrementList() {
    this.params.offset += this.params.limit
    let aux = await this.load( this.params )
    this.list = this.list.concat( aux )
    if ( aux.length < this.params.limit ) {
      window.removeEventListener( "scroll", this.scrollEventListener )
    }
  }

  async search( event?, params?) {
    this.params = params ? params : this.params
    this.reset_params()
    this.list = await this.load( params )
    if ( !this.is_paginated() ) {
      window.addEventListener( "scroll", this.scrollEventListener )
    }
  }

  async sort( e ) {
    this.params.sort = e.active;
    this.params.direction = e.direction;
    this.search( e, this.params )
  }

  table_fields() {
    return this.config.map( e => e.label );
  }

  do_navigate( row ) {
    this.navigate && this.navigate( row );
  }

  reset_params() {
    this.params.offset = 0
    this.params.limit = this.params.limit ?? 20
  }

  is_paginated(): boolean {
    return this.list && this.list[0] && this.params && this.list[0]["record_count"] > 0
  }

  async page_changed( e ) {
    this.params.offset = e.pageIndex * e.pageSize;
    this.params.limit = e.pageSize;
    this.list = await this.load( this.params )
  }
}
