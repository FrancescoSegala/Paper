import { Component, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { Router } from '@angular/router';
import { BusService, default_render, PAGE_CHANGE, AddBottomsheetComponent, screen_size, RELOAD_EVENT } from '@eng';
import { DealersService } from '../dealers.service';
import { ListsService } from '../lists.service';
import { PaperDatePipe } from '../paper-date.pipe';
import { WaybillsService } from '../waybills.service';
import { is_authorized } from '../role.guard';
import { get_color_digital } from '../util';

@Component( {
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.css']
} )
export class ListsComponent implements OnInit {


  is_authorized = is_authorized;

  config: any = {
    search_params: [
      {
        label: "waybill",
        field: "waybill_id_like",
        text: "id"
      },
      {
        autocomplete: {
          label: "dealer",
          field: "dealer_id",
          config: {
            placeholder: "select_dealer",
            backend: {
              field: "dealer_like",
              loadFn: this.dealers_load.bind( this ),
            },
            frontend: {
              //TODO valueFn deve essere lo stesso di displayFn->e=>e.value e conseguente cambio a backend del criterio di ricerca
              valueFn: ( option ) => option.description,
              renderFn: ( option ) => option ? option.dealer : "",
              displayFn: ( value, options ) => value && options.find( e => e.description == value ) ? options.find( e => e.description == value )['dealer'] : ""
            }
          }
        }
      }, {
        label: "created_at",
        date: {
          start: "created_start",
          end: "created_end"
        }
      }
    ],
    table_fields: [
      {
        label: "waybill_id",
        render: default_render( "waybill_id" )
      }, {
        label: "dealer_id",
        small_icon: "assignment",
        render: ( row ) => row.dealer_id + " - " + row.description

      }, {
        label: "created_at",
        render: ( row ) => this.date.transform( row.created_at, screen_size() == "xs" ? "short" : "medium" )
      }
      , {
        label: "digital",
        icon: ( row ) => row.digital == "true" ? "done" : ""
      }
    ],
    export_fields: [
      {
        label: "list_id",
        render: default_render( "id" )
      }, {
        label: "waybill_id",
        render: default_render( "waybill_id" )
      }, {
        label: "dealer_id",
        render: ( row ) => row.dealer_id + " - " + row.description
      }, {
        label: "digital",
        render: ( row ) => row.digital
      }, {
        label: "created_at",
        render: default_render( "created_at" )
      }, {
        label: "urgent",
        render: default_render( "urgent" )
      }]
    ,
    color_class: ( row ) => get_color_digital( row )
  };

  params = {
    sort: "created_at",
    direction: "desc",
    no_count: "true"
  }

  add_config: any = {
    input: [
      {
        type: "autocomplete",
        label: "dealer",
        field: "dealer_id",
        config: {
          placeholder: "select_dealer",
          backend: {
            field: "dealer_like",
            loadFn: this.dealers_load.bind( this ),
          },
          frontend: {
            valueFn: ( option ) => option.id,
            renderFn: ( option ) => option ? option.dealer : "",
            displayFn: ( value, options ) => value ? options.find( e => e.id == value )['dealer'] : ""
          }
        },
      },
      {
        type: "autocomplete",
        label: "waybill",
        field: "waybill_id",
        config: {
          placeholder: "select_waybill",
          backend: {
            field: "id_like",
            loadFn: this.waybill_load.bind( this ),
          },
          frontend: {
            valueFn: ( option ) => option.id,
            renderFn: ( option ) => option ? option.id : "",
            displayFn: ( value ) => value ? value : ""
          }
        },
      }
    ],
    createFn: this.create.bind( this ),
    enableBtn: ( params ) => params.dealer_id && params.waybill_id

  }

  constructor(
    private l: ListsService,
    private d: DealersService,
    private w: WaybillsService,
    private bus: BusService,
    private date: PaperDatePipe,
    private bs: MatBottomSheet,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.bus.publish( PAGE_CHANGE, "lists" );
  }

  async load( params ) {
    if ( !params.urgent ) {
      delete params.urgent;
    }
    let list = await this.l.list( params );
    list.forEach( e => e.selected = e.urgent == 'true' );
    return list;
  }

  navigate( row ) {
    this.router.navigate( ["lists/" + row.id] )
  }

  async openBottomSheet() {
    await ( this.bs.open( AddBottomsheetComponent, { data: this.add_config } ).afterDismissed().toPromise() )
    this.bus.publish( RELOAD_EVENT, this.params )
  }

  dealers_load( params ) {
    return this.d.list( params )
  }

  waybill_load( params ) {
    return this.w.list( Object.assign( {}, params, { sort: "no_sort" } ) )
  }

  async create( params ) {
    params = Object.assign( {}, params, { urgent: ( await this.waybill_load( { id: params.waybill_id } ) )[0].urgent } )
    this.l.post( params )
  }

}

