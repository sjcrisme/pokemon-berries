import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { BerriesService } from '../berries.service';

@Injectable()
export class ViewResolver implements Resolve<Observable<any>> {

  constructor(private berryService: BerriesService) {}

  resolve(route: ActivatedRouteSnapshot) {

    if (route.paramMap.get('name') && route.paramMap.get('id')) {
      const id = parseInt(route.paramMap.get('id'), 10);
      return this.berryService.getBerryFirmness(route.paramMap.get('name'))
        .pipe(
          map(result => {
            return {...result, berryId: id};
          })
        );
    }
  }
}
