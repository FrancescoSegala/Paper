import { Injectable } from '@angular/core';
import { NetService } from '@eng';

@Injectable({
  providedIn: 'root'
})
export class WaybillsService {

  constructor(private net: NetService) { }

  list (params: any) {
    return this.net.list('waybills', params);
  }

  get(id: string) {
    return this.net.get('waybills', id);
  }

  async post(body: any) {
    return await this.net.post('waybills', body, 'true');
  }

  async put(id : string, body : any ){
    return await this.net.put('waybills', id , body);
  }


}
