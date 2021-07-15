import { Injectable } from '@angular/core';
import { NetService } from '@eng';

@Injectable({
  providedIn: 'root'
})
export class DealersService {


  constructor(private net: NetService) { }

  async list (params: any) {
    //nop
    return await this.net.list('dealers', params);
  }

}
