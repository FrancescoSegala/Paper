import { Component, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { Router } from '@angular/router';
import { BusService, default_render, PAGE_CHANGE, RELOAD_EVENT, screen_size } from '@eng';
 import { ConfirmationBottomsheetComponent } from '../eng/confirmation-bottomsheet/confirmation-bottomsheet.component';
import { PaperDatePipe } from '../paper-date.pipe';
import { PracticesService } from '../practices.service';
import { is_authorized } from '../role.guard';

@Component( {
  selector: 'app-practices',
  templateUrl: './practices.component.html',
  styleUrls: ['./practices.component.css']
} )
export class PracticesComponent implements OnInit {

  exportName = "practices";

  config: any = {
    search_params: [
      {
        label: "practice_id",
        field: "id_like",
        text: "practice_id"
      }, {
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
        label: "practice_id",
        render: default_render( "id" )
      }, {
        label: "arrived_at",
        sortable: true ,
        render: ( row ) => this.date.transform( row.arrived_at, screen_size() == "xs" ? "short" : "medium" )
      }, {
        label: "created_at",
        sortable: true ,
        render: ( row ) => this.date.transform( row.created_at,  screen_size() == "xs" ? "short" : "medium"  )
      },
      {
        label: "urgent",
        actions: [
          {
            title: "set_urgent",
            action: (row) => this.openBottomSheet( row ),
            condition: ( row ) => is_authorized( 'receiver', 'admin' ) && row.urgent == "false",
            icon: "flag",
            classes : "icon-btn-xs",
            color : "accent"

          }
        ],
        classes : is_authorized( 'receiver', 'admin' ) ? " action-xs-col" : " hidden"
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
      }],
    color_class: ( row ) => this.get_color( row )
  };

  params = {
    sort: "arrived_at",
    direction: "desc",
    arrived_is_not_null: is_authorized( 'receiver' ) ? 'true' : null,
    no_count : "true"
  }



  confirm_config : any = {
    title : "set_practice_urgent",
    message : "practices_urgent_confirm",
    confirm : {
      title : "yes",
      action : this.update.bind(this),
      classes : "double-line-button-left"
    },
    decline : {
      action : () => {} ,
      title : "no",
      classes : "double-line-button-right"
    },
    classes : "double-line-container"
  }

  constructor( private bus: BusService,
    private date: PaperDatePipe,
    private p: PracticesService,
    private bs: MatBottomSheet,
    private router: Router ) { }

  ngOnInit(): void {
    this.bus.publish( PAGE_CHANGE, "practices" );
  }

  openBottomSheet( row ) {
    this.bs.open( ConfirmationBottomsheetComponent, { data: { config : this.confirm_config , payload : row }} );
  }

  update( row ) {
    this.p.put( row.id, { urgent: row.urgent == 'true' ? 'false' : 'true' } );
    this.bus.publish( RELOAD_EVENT , this.params );
  }

  get_color( row ) {
    return row.urgent == 'true' ? 'red-row' : '';
  }

  async load( params ) {
    if ( !params.urgent ) {
      delete params.urgent;
    }
    let list = await this.p.list( params )
    list.forEach( e => e.selected = e.urgent == 'true' )
    return list;
  }

  navigate( row ) {
    this.router.navigate( ["practices/" + row.id] )
  }

}
