import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { BerriesService } from '../berries.service';
import { BerryFirmnesses } from './models';

@Injectable()
export class ViewResolver implements Resolve<Observable<any>> {

  constructor(private berryService: BerriesService) {}

  public resolve(route: ActivatedRouteSnapshot) {

    if (route.paramMap.get('name') && route.paramMap.get('id')) {
      const id: number = parseInt(route.paramMap.get('id'), 10);
      return this.berryService.getBerryFirmness(route.paramMap.get('name'))
        .pipe(
          map((result: BerryFirmnesses) => {
            return {...result, berryId: id};
          })
        );
    }
  }
}
