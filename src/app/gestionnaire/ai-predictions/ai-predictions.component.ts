import { Component, OnInit } from '@angular/core';
import { AiPredictionsService } from '../ai-predictions.service';

@Component({
    selector: 'app-ai-predictions',
    templateUrl: './ai-predictions.component.html',
    styleUrls: ['./ai-predictions.component.css']
})
export class AiPredictionsComponent implements OnInit {
    predictions: any[] = [];

    constructor(private aiPredictionsService: AiPredictionsService) {}

    ngOnInit(): void {
        this.loadPredictions();
    }

    loadPredictions(): void {
        this.aiPredictionsService.getPredictions().subscribe(predictions => {
            this.predictions = predictions;
        });
    }

    isCriticalStock(forecastedStock: number, criticalStockLevel: number): boolean {
        return forecastedStock < criticalStockLevel;
    }
}
