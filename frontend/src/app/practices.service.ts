import { Injectable } from '@angular/core';
import { NetService } from '@eng';

@Injectable({
  providedIn: 'root'
})
export class PracticesService {

  constructor(private net: NetService) { }

  async list (params: any) {
    return await this.net.list('practices', params);
  }

  async get(id: string ) {
    return await this.net.get('practices', id);
  }


  //nop

  async post(body: any) {
    return await this.net.post('practices', body, 'true');
  }

  async put(id : string , body : any){
    return await this.net.put("practices", id , body);
  }


}
