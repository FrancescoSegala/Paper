import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BusService, default_render, PAGE_CHANGE, RELOAD_EVENT, screen_size, TPipe } from '@eng';
import { AddBottomsheetComponent } from '../eng/add-bottomsheet/add-bottomsheet.component';
import { PaperDatePipe } from '../paper-date.pipe';
import { is_authorized } from '../role.guard';
import { WaybillsService } from '../waybills.service';

@Component( {
  selector: 'app-urgent-waybills',
  templateUrl: './urgent-waybills.component.html',
  styleUrls: ['./urgent-waybills.component.css']
} )
export class UrgentWaybillsComponent implements OnInit {

  @ViewChild( 'input_id' ) input_id: ElementRef;


  is_authorized = is_authorized;

  config: any = {
    search_params: [
      {
        label: "waybill",
        field: "id_like",
        text: "waybill_id"
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
        render: default_render( "id" )
      }, {
        label: "created_at",
        render: ( row ) => this.date.transform( row.created_at, screen_size() == "xs" ? "short" : "medium" )
      }, {
        label: "arrived_at",
        render: ( row ) => this.date.transform( row.arrived_at, screen_size() == "xs" ? "short" : "medium" )
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
      }]
  };

  add_config: any = {
    input: [
      {
        type: "text",
        label: "waybill",
        field: "waybill_id",
        placeholder: "waybill_id"
      }
    ],
    createFn: this.create_waybill.bind( this ),
    enableBtn: ( params ) => params.waybill_id
  }

  params = {
    sort: "created_at",
    direction: "desc",
    urgent: 'true',
    no_count: "true"
  }

  constructor(
    private w: WaybillsService,
    private bus: BusService,
    private date: PaperDatePipe,
    private sb: MatSnackBar,
    private bs: MatBottomSheet,
    private t: TPipe ) { }

  ngOnInit(): void {
    this.bus.publish( PAGE_CHANGE, "urgent-waybills" );
  }

  async load( params ) {
    return await this.w.list( params );
  }

  async create_waybill( params ) {
    try {
      await this.w.post( { id: params.waybill_id, urgent: "true" } );
    } catch ( e ) {
      this.openSnackbarDuplicateWaybill( params.waybill_id )
      console.log( e );
    }
  }

  async openBottomSheet() {
    await ( this.bs.open( AddBottomsheetComponent, { data: this.add_config } ).afterDismissed().toPromise() )
    this.bus.publish( RELOAD_EVENT, this.params )

  }

  openSnackbarDuplicateWaybill( id ) {
    this.sb.open( " LdV " + id + ": " + this.t.transform( "duplicate_urgent_waybill" ), "OK", { duration: 5000 } );
  }


}
