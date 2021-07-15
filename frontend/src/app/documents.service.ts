import { Injectable } from '@angular/core';
import { NetService } from '@eng';

@Injectable({
  providedIn: 'root'
})
export class DocumentsService {

  constructor(private net: NetService) { }

  async list (params: any) {
    return await this.net.list('documents', params);
  }

  async get(id: string) {
    return await this.net.get('documents', id);
  }
}
