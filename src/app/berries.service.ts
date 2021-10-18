import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BerriesType, BerryFirmnesses, BerryInfo } from './core/models';

@Injectable({
  providedIn: 'root'
})
export class BerriesService {

  constructor(private http: HttpClient) { }

  public getAllBerries(): Observable<BerriesType>{
    return this.http.get<BerriesType>('https://pokeapi.co/api/v2/berry?limit=100');
  }

  public getBerriInfo(name: string): Observable<BerryInfo> {
    return this.http.get<BerryInfo>('https://pokeapi.co/api/v2/berry/' + name);
  }

  public getBerryFirmness(name: string): Observable<BerryFirmnesses> {
    return this.http.get<BerryFirmnesses>(`https://pokeapi.co/api/v2/berry-firmness/${name}?limit=100`);
  }

}

