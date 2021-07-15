import { Injectable } from '@angular/core';
import { NetService } from '@eng';

@Injectable({
  providedIn: 'root'
})
export class RequestsService {

  constructor(private net: NetService) { }

  async list (params: any) {
    return await this.net.list('requests', params);
  }

  async get(id: string) {
    return await this.net.get('requests', id);
  }

  async post(body: any) {
    return await this.net.post('requests', body, 'true');
  }

  async put(id : string , body : any){
    return await this.net.put("requests", id , body);
  }
}
