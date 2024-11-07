import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError } from 'rxjs';

interface Prediction {
    productId: string;
    productName: string;
    forecastedStock: number;
    criticalStockLevel: number;
}

@Injectable({
    providedIn: 'root'
})
export class AiPredictionsService {
    private apiUrl = 'https://api.example.com/predictions'; // Remplacez par votre URL d'API

    constructor(private http: HttpClient) {}

    getPredictions(): Observable<Prediction[]> {
        return this.http.get<Prediction[]>(this.apiUrl).pipe(
            catchError(error => {
                console.error('Error fetching predictions:', error);
                throw error; // Re-throw the error for handling in the component
            })
        );
    }
}
