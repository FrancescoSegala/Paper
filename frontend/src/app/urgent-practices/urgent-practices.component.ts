import { Component, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { BusService, default_render, PAGE_CHANGE, RELOAD_EVENT, screen_size, TPipe } from '@eng';
import { AddBottomsheetComponent } from '../eng/add-bottomsheet/add-bottomsheet.component';
import { PaperDatePipe } from '../paper-date.pipe';
import { PracticesService } from '../practices.service';
import { is_authorized } from '../role.guard';

@Component( {
  selector: 'app-urgent-practices',
  templateUrl: './urgent-practices.component.html',
  styleUrls: ['./urgent-practices.component.css']
} )
export class UrgentPracticesComponent implements OnInit {

  is_authorized = is_authorized;


  config: any = {
    search_params: [
      {
        label: "practice_id",
        field: "id_like",
        text: "practice_id"
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
        label: "practice_id",
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
        label: "practice_id",
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

  params = {
    sort: "created_at",
    direction: "desc",
    urgent: "true",
    no_count: "true"
  }

  add_config: any = {
    input: [
      {
        type: "text",
        label: "practice_id",
        field: "practice_id",
        placeholder: "practice_id"
      }
    ],
    createFn: this.create.bind( this ),
    enableBtn: ( params ) => params.practice_id,
  }

  constructor( private bus: BusService,
    private date: PaperDatePipe,
    private p: PracticesService,
    private bs: MatBottomSheet,
    private router: Router,
    private sb: MatSnackBar,
    private t: TPipe ) { }

  ngOnInit(): void {
    this.bus.publish( PAGE_CHANGE, "urgent_practices" );
  }

  load( params ) {
    return this.p.list( params );
  }

  async openBottomSheet() {
    await ( this.bs.open( AddBottomsheetComponent, { data: this.add_config } )
      .afterDismissed().toPromise() )
    this.bus.publish( RELOAD_EVENT, this.params );
  }

  async create( params ) {
    try {
      return await this.p.post( { id: params.practice_id, urgent: "true" } )
    } catch ( error ) {
      this.openSnackbarErrorMessage( params.practice_id, error.error.message );
    }
  }

  openSnackbarErrorMessage( id, message ) {
    this.sb.open( this.t.transform( "practice" ) + " " + id + ": " + this.t.transform( message ), "OK", { duration: 5000 } );
  }

  navigate( row ) {
    this.router.navigate( ["practices/" + row.id] )
  }
}
