import { Injectable } from '@angular/core';
import { NetService } from './net.service';

@Injectable({
  providedIn: 'root'
})
export class AuditReportService {

  constructor(private net: NetService) { }

  async list (params: any) {
    return await this.net.list('audits/report', params);
  }


  async functions(params : any){
    return await this.net.list('audits/report/functions', params);
  }

}
