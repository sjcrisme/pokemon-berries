import { Injectable } from '@angular/core';
import { BerriesService } from './berries.service';
import { map, switchMap } from 'rxjs/operators';
import { forkJoin } from 'rxjs/internal/observable/forkJoin';

export interface BerriesType {
  count: number;
  next: null;
  previous: null;
  results: BerryItem[];
}

export interface BerryItem {
  name: string;
  url: string;
}

@Injectable({
  providedIn: 'root'
})

export class StoreService {

  public db;
  constructor(private berryService: BerriesService) { }

  init() {
    const arrayOfStreams = [];
    return this.berryService.getAllBerries().pipe(
      map( (berries: BerriesType) => {
        const result = berries.results;
        if (result) {
          for (let value of Object.values(result)) {
            arrayOfStreams.push(this.berryService.getBerriInfo(value.name));
          }
        }
        return berries;
      }),
      switchMap(berries => forkJoin(arrayOfStreams))
    );
  }

  getBerrybyId(id) {
    return this.db.find(berry => berry.id === id);
  }

  getBerriesByNames(berriesNames: string[]) {
    return this.db.filter(berries => berriesNames.some(berry => berry === berries.name));
  }

}
