import { Component, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { BusService, default_render, PAGE_CHANGE, screen_size } from '@eng';
import { PaperDatePipe } from '../paper-date.pipe';
import { PracticesService } from '../practices.service';
import { RequestsService } from '../requests.service';
import { is_authorized } from '../role.guard';
import { get_color_requests } from '../util';

@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.css']
})
export class RequestsComponent implements OnInit {

  is_authorized = is_authorized;

  config: any = {
    search_params: [{
        label : "practice_id" ,
        field : "practice_id_like" ,
        text : "practice_id"
      }, {
        label: "created_at",
        date: {
          start: "created_start",
          end: "created_end"
        }
      }, {
        label: "completed_at",
        date: {
          start: "completed_start",
          end: "completed_end"
        }
      }, {
        label: "to_be_completed",
        field: "to_be_completed",
        single_checkbox: {
          label: "to_be_completed"
        }
      }
    ],
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
      }
    ],
    export_fields: [{
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
      }
    ],
    color_class: ( row ) => get_color_requests( row )
  };

  params = {
    sort: "created_at",
    direction: "desc",
  }

  

  constructor( private bus: BusService,
    private date: PaperDatePipe,
    private r: RequestsService,
    private router: Router ) { }

  ngOnInit(): void {
    this.bus.publish( PAGE_CHANGE, "requests" );
  }

  async load( params ) {
    if ( !params.to_be_completed ) {
      delete params.to_be_completed;
    }
    return await this.r.list( params );
  }

  navigate( row ) {
    this.router.navigate( ["practices/" + row.practice_id] )
  }

}
