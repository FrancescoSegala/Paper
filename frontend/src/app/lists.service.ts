import { Injectable } from '@angular/core';
import { NetService } from '@eng';

@Injectable({
  providedIn: 'root'
})
export class ListsService {

  constructor(private net: NetService) { }

  async list (params: any) {
    return await this.net.list('lists', params);
  }

  async get(id: string) {
    return await this.net.get('lists', id);
  }

  async post(body: any) {
    return await this.net.post('lists', body);
  }

  async put(id : string , body : any){
    return await this.net.put('lists', id , body);
  }

}
