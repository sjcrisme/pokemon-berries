import {Injectable} from '@angular/core';
import {BerriesService} from './berries.service';
import {map, switchMap} from 'rxjs/operators';
import {forkJoin} from 'rxjs/internal/observable/forkJoin';
import {Observable} from 'rxjs';
import {BerriesType, BerryInfo, BerryItem} from './core/models';

@Injectable({
  providedIn: 'root'
})

export class StoreService {

  public db: BerryInfo[];
  constructor(private berryService: BerriesService) { }

  public init(): Observable<BerryInfo[]> {
    const arrayOfStreams: Observable<BerryInfo>[] = [];
    return this.berryService.getAllBerries().pipe(
      map( (berries: BerriesType) => {
        const result: BerryItem[] = berries.results;
        if (result) {
          for (const value of Object.values(result)) {
            arrayOfStreams.push(this.berryService.getBerriInfo(value.name));
          }
        }
        return berries;
      }),
      switchMap(() => forkJoin(arrayOfStreams))
    );
  }

  public getBerrybyId(id: number): BerryInfo{
    return this.db.find((berry: BerryInfo) => berry.id === id);
  }

  public getBerriesByNames(berriesNames: string[]): BerryInfo[] {
    return this.db.filter((berries: BerryInfo) => berriesNames.some((berry: string) => berry === berries.name));
  }

}
