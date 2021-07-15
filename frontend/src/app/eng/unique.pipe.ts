import { Pipe, PipeTransform } from '@angular/core';

@Pipe( {
  name: 'unique'
} )
export class UniquePipe implements PipeTransform {

  transform( list: any[], field: string ): any[] {
    if ( !list ) return null;
    return list.reduce( ( r, e ) => {
      if ( r.findIndex( x => x[field] == e[field] ) == -1 ) {
        r = r.concat( e )
      }
      return r
    }, [] )
  }

}
