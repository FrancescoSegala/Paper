import { Component, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BusService, default_render, PAGE_CHANGE, RELOAD_EVENT, screen_size, TPipe } from '@eng';
import { ConfirmationBottomsheetComponent } from '../eng/confirmation-bottomsheet/confirmation-bottomsheet.component';
import { PaperDatePipe } from '../paper-date.pipe';
import { is_authorized } from '../role.guard';
import { get_color } from '../util';
import { WaybillsService } from '../waybills.service';

@Component( {
  selector: 'app-waybills',
  templateUrl: './waybills.component.html',
  styleUrls: ['./waybills.component.css']
} )
export class WaybillsComponent implements OnInit {

  is_authorized = is_authorized;

  config: any = {
    search_params: [
      {
        label: "waybill",
        field: "id_like",
        text: "waybill_id"
      },
      {
        label: "arrived_at",
        date: {
          start: "arrived_start",
          end: "arrived_end"
        }
      }, {
        label: "urgent",
        field: "urgent",
        single_checkbox: {
          label: "urgent_only"
        }
      }
    ],
    table_fields: [
      {
        label: "waybill_id",
        render: default_render( "id" )
      },
      {
        label: "arrived_at",
        render: ( row ) => this.date.transform( row.arrived_at, screen_size() == "xs" ? "short" : "medium" ),
        sortable: true
      },
      {
        label: "created_at",
        render: ( row ) => this.date.transform( row.created_at, screen_size() == "xs" ? "short" : "medium" )
      },
      {
        label: "urgent",
        actions: [
          {
            title: "set_urgent",
            action: ( row ) => this.openBottomSheetUrgentWaybill( row ),
            condition: ( row ) => is_authorized( 'receiver', 'admin' ) && row.urgent == "false",
            icon: "flag",
            classes: "icon-btn-xs",
            color: "accent"
          }
        ],
        classes: is_authorized( 'receiver', 'admin' ) ? " action-xs-col" : " hidden "
      }
    ],
    export_fields: [
      {
        label: "waybill_id",
        render: default_render( "id" )
      }, {
        label: "arrived_at",
        render: default_render( "arrived_at" )
      }, {
        label: "created_at",
        render: default_render( "created_at" )
      }, {
        label: "urgent",
        render: default_render( "urgent" )
      }
    ],
    color_class: ( row ) => get_color( row )
  };

  params = {
    sort: "arrived_at",
    direction: "desc",
    no_count: "true",
    arrived_is_not_null: is_authorized( 'receiver', 'sender', 'admin', 'supervisor' ) ? 'true' : null
  }

  confirm_config_urgent: any = {
    title: "set_waybill_urgent",
    message: "waybill_urgent_confirm",
    confirm: {
      title: "yes",
      action: this.update.bind( this ),
      classes: "double-line-button-left"
    },
    decline: {
      action: ( _ ) => _,
      title: "no",
      classes: "double-line-button-right"
    },
    classes: "double-line-container"
  }

  constructor(
    private w: WaybillsService,
    private bus: BusService,
    private date: PaperDatePipe,
    private bs: MatBottomSheet,
    private sb: MatSnackBar,
    private t: TPipe
  ) { }

  ngOnInit(): void {
    this.bus.publish( PAGE_CHANGE, "waybills" );
  }

  async load( params ) {
    if ( !params.urgent ) {
      delete params.urgent;
    }
    let list = await this.w.list( params );
    list.forEach( e => e.selected = e.urgent == 'true' );
    return list;
  }

  async create( id ) {
    let put = true
    try {
      await this.w.post( { "id": id, arrived_at:true } )
    } catch ( error ) {
      if ( error.error.status == 409 ) {
        await this.w.put( id, { arrived_at: true } )
        put = false
      }
      if ( error.error.status == 400 ) {
        this.openSnackbarErrorMessage( id, error.error.message )
        put = false
      }
    }
    if ( put ) {
      await this.w.put( id, { arrived_at: true } )
    }
    this.bus.publish( RELOAD_EVENT, this.params )
  }

  update( row ) {
    this.w.put( row.id, { urgent: row.urgent == 'true' ? 'false' : 'true' } );
    this.bus.publish( RELOAD_EVENT, this.params );
  }

  openBottomSheetUrgentWaybill( row ) {
    this.bs.open( ConfirmationBottomsheetComponent, { data: { config: this.confirm_config_urgent, payload: row } } );
  }


  openSnackbarErrorMessage( id, message ) {
    this.sb.open( this.t.transform( "waybill_id" ) + " " + id + ": " + this.t.transform( message ), "OK", { duration: 5000 } );
  }

  waybill_load( params ) {
    return this.w.list( params )
  }
}
