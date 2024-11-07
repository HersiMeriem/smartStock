import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PredictionService {
  private apiUrl = 'https://your-api-url.com/predictions'; // Remplacez par votre URL d'API

  constructor(private http: HttpClient) { }

  getPredictions(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
