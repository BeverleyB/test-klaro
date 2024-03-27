import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { CardsData } from '../interfaces/cards-data.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = 'https://64f98ead4098a7f2fc149a34.mockapi.io/api/homepage-cards';

  constructor(private http: HttpClient) {}
  
  getCardsData(): Observable<CardsData[]> {
    return this.http.get<CardsData[]>(`${this.baseUrl}`);
  }
}
