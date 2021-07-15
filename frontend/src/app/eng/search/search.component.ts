import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { of } from 'rxjs';
import { BusService, DO_EXPORT_EVENT, RELOAD_EVENT } from '../bus.service';
import { ConfigService } from '../config.service';
import { excel } from '../excel';
import { TPipe } from '../t.pipe';

@Component( {
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
} )
export class SearchComponent implements OnInit, OnDestroy {



  @Input() config: any;

  @Input() params: any;

  @Input() load: any;

  @Input() navigate: any;

  @Input() add_item: any;

  @Input() show_add: boolean;

  @Input() export_name = "report";

  @Input() service_name? : string;

  do_export = null;

  constructor(
    private bus: BusService,
    private sb: MatSnackBar,
    private t: TPipe,
    private configService : ConfigService
    ) { }

  ngOnDestroy(): void {
    this.bus.unsubscribe( DO_EXPORT_EVENT )
  }

  ngOnInit() {
    this.config.export_fields ? this.do_export = "true" : null
    this.do_export ? this.bus.subscribe( DO_EXPORT_EVENT, this.export.bind( this ) ) : null
  }

  async export() {
    this.sb.open( this.t.transform( "export_limit", { LIMIT: this.configService.get("export_limit") } ), "OK", { duration: 5000 } );
    let aux = await this.load( Object.assign( {}, this.params, { limit: this.configService.get("export_limit"), offset: 0 } ) )
    aux = aux
      .map( e => this.renderObject( e ) )
      .map( e => this.exportObject( e ) )
      .map( e => this.translateObject( e ) )
    let headers = this.config.export_fields.map( e => this.t.transform( e.label ) )
    excel( aux,  this.export_name, this.export_name, headers );
  }

  private renameField( o: any, oldName: string, newName: string ) {
    if ( oldName == newName ) {
      return o;
    }
    let result = Object.assign( {}, o )
    result[newName] = result[oldName];
    delete result[oldName];
    return result;
  }

  private translateObject( o: any ) {
    let result = Object.assign( {}, o );
    Object.keys( result ).forEach(
      e => {
        result = this.renameField( result, e, this.t.transform( e ) )
      } )
    return result;
  }

  private exportObject( o: any ) {
    return this.config.export_fields.reduce( ( r, e ) => {
      r[e.label] = o[e.label];
      return r;
    }, {} );
  }

  private renderObject( o: any ) {
    let result = Object.assign( {}, o )
    this.config.export_fields.forEach(
      e => result[e.label] = e.render( result )
    )
    return result;
  }



}
