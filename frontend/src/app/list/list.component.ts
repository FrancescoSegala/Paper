import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { BusService, default_render, is_empty, PAGE_CHANGE, RELOAD_EVENT, screen_size, TPipe } from '@eng';
import { ListsService } from '../lists.service';
import { PaperDatePipe } from '../paper-date.pipe';
import { PracticesService } from '../practices.service';
import { is_authorized } from '../role.guard';
import { get_color } from '../util';

@Component( {
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
} )
export class ListComponent implements OnInit {

  is_authorized = is_authorized;

  list: any = {}

  config: any = {
    search_params: [
      {
        label: "practice_id",
        field: "id_like",
        text: "id"
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
        render: ( row ) => this.date.transform( row.arrived_at, "medium" )
      }, {
        label: "created_at",
        render: ( row ) => this.date.transform( row.created_at, "medium" )
      }, {
        label: "urgent",
        render: default_render( "urgent" )
      }],
    color_class: ( row ) => get_color( row )
  };

  params = {
    sort: "arrived_at",
    direction: "desc",
    id_like: "",
    no_count: "true"
  }

  constructor( private a: ActivatedRoute,
    private p: PracticesService,
    private l: ListsService,
    private date: PaperDatePipe,
    private bus: BusService,
    private router: Router,
    private sb: MatSnackBar,
    private t: TPipe ) { }

  async ngOnInit() {
    this.bus.publish( PAGE_CHANGE, "list" );
    this.list = await this.l.get( this.a.snapshot.params.id )
  }

  async load( params ) {
    let list = await this.l.get( this.a.snapshot.params.id )
    params = Object.assign( {}, params, { id_in: list["practice_id"] } )
    return is_empty( list["practice_id"] ) ? [] : await this.p.list( params )
  }

  async create( id ) {
    let put = true
    try {
      await this.p.post( { id: id, arrived_at: true, urgent: this.list.urgent } )
    } catch ( error ) {
      if ( error.error.status == 409 ) {
        await this.p.put( id, { id: id, list_id: this.a.snapshot.params.id, arrived_at: true } )
        put = false
      }
      if ( error.error.status == 400 ) {
        this.openSnackbarErrorMessage( id, error.error.message )
        put = false
      }
    }
    if ( put ) {
      await this.p.put( id, { id: id, list_id: this.a.snapshot.params.id, arrived_at: true } )
    }
    this.bus.publish( RELOAD_EVENT, this.params )
  }

  openSnackbarErrorMessage( id, message ) {
    this.sb.open( this.t.transform( "practice" ) + " " + id + ": " + this.t.transform( message ), "OK", { duration: 5000 } );
  }

  navigate( row ) {
    this.router.navigate( ["practices/" + row.id] )
  }

}
