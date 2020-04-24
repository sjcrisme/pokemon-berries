import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BerriesService {

  constructor(private http: HttpClient) { }

  getAllBerries() {
    return this.http.get('https://pokeapi.co/api/v2/berry?limit=100');
  }

  getBerriInfo(name: string) {
    return this.http.get('https://pokeapi.co/api/v2/berry/' + name);
  }

  getBerryFirmness(name: string) {
    return this.http.get(`https://pokeapi.co/api/v2/berry-firmness/${name}?limit=100`);
  }

}

