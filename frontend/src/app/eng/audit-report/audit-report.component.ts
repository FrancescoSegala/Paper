import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AuditReportService } from '../audit-report.service';
import { METHODS, STATUS } from '../audits/audit.const';
import { BusService, PAGE_CHANGE } from '../bus.service';
import { TPipe } from '../t.pipe';
import { default_render } from '../util';

const ISO_8601 = 'yyyy-MM-ddTHH:mm:ssZ'




export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text?: string;
  graph? : any
}



@Component( {
  selector: 'app-audit-report',
  templateUrl: './audit-report.component.html',
  styleUrls: ['./audit-report.component.css']
} )
export class AuditReportComponent implements OnInit {


  list = []

  today = this.date.transform( new Date(), ISO_8601 );
  yesterday = this.date.transform( new Date( ( new Date() ).getFullYear(), ( new Date() ).getMonth(), ( new Date() ).getDate() - 1 ), ISO_8601 );
  last_week = this.date.transform( new Date( ( new Date() ).getFullYear(), ( new Date() ).getMonth(), ( new Date() ).getDate() - 7 ), ISO_8601 );
  last_month = this.date.transform( new Date( ( new Date() ).getFullYear(), ( new Date() ).getMonth() - 1, ( new Date() ).getDate() ), ISO_8601 );

  config: any = {
    table_fields: [{
      label: "url"
    }, {
      label: "method"
    }, {
      label: "200"
    }, {
      label: "400"
    }, {
      label: "401"
    }, {
      label: "404"
    }, {
      label: "409"
    }, {
      label: "500"
    }]
  }

  constructor( private ar: AuditReportService, private bus: BusService, private t: TPipe, private date: DatePipe ) { }

  async ngOnInit() {

    this.bus.publish( PAGE_CHANGE, "audit-report" )
    let list  = await this.load({limit: 10000});
    this.list = Array.from(new Set(list
        .map(e => Object.assign({url: e.url, method: e.method}))
        .map(e => JSON.stringify(e))))
        .map(e => JSON.parse(e))
        .map(e => Object.assign(e, {'200': qty(list, e, '200'),
                    '400': qty(list, e, '400'),
                    '401': qty(list, e, '401'),
                    '404': qty(list, e, '404'),
                    '409': qty(list, e, '409'),
                    '500': qty(list, e, '500')}))

  }





  params = { limit : 10 }


  load( params ) {
    return this.ar.functions( params );
  }

  table_fields(){
    return this.config.table_fields.map(e => e.label)
  }

}

function qty(list, e, status){
  return list.filter(x => x.method == e.method && x.url == e.url && x.status == status)
  .map(x => x.qty).reduce((r, x) => r + x, 0)
}