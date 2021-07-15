import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import {  user } from '@eng';

const mapping = {
  'dashboard': ['receiver', 'sender', 'admin', 'supervisor'],
  'waybills': ['receiver', 'sender', 'admin', 'supervisor'],
  'lists': ['receiver', 'sender', 'admin', 'supervisor'],
  'audits': ['admin'],
  'audits/:id': ['admin'],
  'audit-report': ['admin'],
  'practices/urgent': ['sender', 'admin', 'supervisor'],
  'practices': ['receiver', 'sender', 'admin', 'supervisor'],
  'practices/:id': ['receiver', 'sender', 'admin', 'supervisor'],
  'requests': ['receiver', 'sender', 'admin', 'supervisor'],
  'lists/:id': ['receiver', 'admin', 'supervisor', 'sender'],
  'waybills/urgent': ['sender', 'admin', 'supervisor']
}

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {

  constructor(private router: Router){}
  canActivate(next: ActivatedRouteSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    let route = next.routeConfig.path;
    let permissions = mapping[route];
    if (permissions.filter(e => is_authorized(e)).length > 0){
      return true;
    } else {
      this.router.navigateByUrl('/unauthorized');
      return false;
    }
  }

}

export function is_authorized(...roles){
  return roles.filter(e => user()['authorizations']?.includes(e)).length > 0;
}
