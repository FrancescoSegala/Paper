import { Component, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { AddBottomsheetComponent, BusService, ConfirmationBottomsheetComponent, default_render, PAGE_CHANGE, RELOAD_EVENT, screen_size } from '@eng';
import { DocumentsService } from '../documents.service';
import { PaperDatePipe } from '../paper-date.pipe';
import { PracticesService } from '../practices.service';
import { RequestsService } from '../requests.service';
import { is_authorized } from '../role.guard';
import { get_color, get_color_requests } from '../util';

@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.css']
})
export class PracticeComponent implements OnInit {

  practice_id = "";
  practices : any = {};
  header_config : any = {};
  is_authorized = is_authorized;

  config: any = {
    search_params: [],
    table_fields: [
      {
        label: "id",
        render: default_render( "id" )
      }, {
        label: "type_id",
        render : (row) => row.type_id + " - " + row.description ,
      }, {
        label: "box_id",
        render: default_render( "box_id" )
      }, {
        label: "created_at",
        render: ( row ) => this.date.transform( row.created_at, "medium" )
      }, {
        label: "action",
        actions: [{
          action: ( row ) => this.download( row.id ),
          icon: "download",
          title: "empty_string",
          condition: ( _ ) => true
        }],
        classes: "button-small-width"
      }
    ],
    color_class : (row) => get_color(row)
  };

  params = {
    sort: "id",
    direction: "asc",
    limit: 6
  }

  config_requests = {search_params: [],
    table_fields: [{
      label: "request_id",
      render: default_render( "id" )
    }, {
      label: "created_at",
      sortable: true ,
      render: ( row ) => this.date.transform( row.created_at, screen_size() == "xs" ? "short" : "medium" )
    }, {
      label: "created_by",
      render: default_render( "created_by" )
    }, {
      label: "practice_id",
      render: default_render( "practice_id" )
    }, {
      label: "address",
      render: default_render( "address" )
    }, {
      label: "completed_at",
      sortable: true ,
      render: ( row ) => this.date.transform( row.completed_at,  screen_size() == "xs" ? "short" : "medium"  )
    }, {
      label: "completed_by",
      render: default_render( "completed_by" )
    }, {
      label: "empty_string",
      actions: [
        {
          title: "complete",
          action: (row) => this.openBottomSheetConfirmComplete( row ),
          condition: ( row ) => is_authorized( 'receiver', 'admin' ) && row.completed == "false",
          icon: "flag",
          classes : "icon-btn-xs",
          color : "accent"
  
        }
      ],
      classes : is_authorized( 'receiver', 'admin' ) ? " action-xs-col" : " hidden"
    }
  ], color_class: ( row ) => get_color_requests( row )};

  params_requests = {limit: 6, sort: "created_at", direction: "desc"}

  add_config: any = {
    input: [{
        type: "text",
        label: "address",
        field: "address",
        placeholder: "address"
      }
    ],
    createFn: this.create.bind( this ),
    enableBtn: ( params ) => params.address
  }

  confirm_complete_request: any = {
    title: "complete_request",
    message: "complete_request_confirm",
    confirm: {
      title: "yes",
      action: this.complete.bind( this ),
      classes: "double-line-button-left"
    },
    decline: {
      action: ( _ ) => _,
      title: "no",
      classes: "double-line-button-right"
    },
    classes: "double-line-container"
  }

  constructor( private a: ActivatedRoute,
    private d: DocumentsService,
    private p: PracticesService,
    private r: RequestsService,
    private date: PaperDatePipe,
    private bus: BusService,
    private bs: MatBottomSheet,
    private sb: MatSnackBar, ) { }

  async ngOnInit() {
    this.bus.publish( PAGE_CHANGE, {"label" : "title_practice", "params": {"ID" : this.a.snapshot.params.id }});
    this.practice_id = this.a.snapshot.params.id;
  }

  async load(params){
    return await this.d.list(Object.assign({}, params, {practice_id : this.practice_id}));
  }

  async load_requests(params_requests){
    return await this.r.list(Object.assign({}, params_requests, {practice_id : this.practice_id}));
  }

  download(id){
    console.log("Download", id);
  }

  async create( params ) {
    params = Object.assign({}, params, {practice_id: this.a.snapshot.params.id});
    console.log(params);
    try {
      await this.r.post( params );
    } catch (error) {
      this.openSnackbarErrorMessage( params.id, error.error.message )
    }
    this.bus.publish( RELOAD_EVENT, this.params_requests );
  }

  async complete(row){
    await this.r.put(row.id, this.params_requests);
    this.bus.publish( RELOAD_EVENT, this.params_requests );
  }

  openBottomSheet( ) {
    this.bs.open( AddBottomsheetComponent, { data: this.add_config } );
  }

  openBottomSheetConfirmComplete( row ){
    this.bs.open( ConfirmationBottomsheetComponent, { data: {config: this.confirm_complete_request,  payload: row}} );
  }

  openSnackbarErrorMessage( id, message ) {
    this.sb.open( message, "OK", { duration: 5000 } );
  }

}
