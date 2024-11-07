import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { PredictionService } from '../prediction.service'; // Assurez-vous que le service existe

@Component({
  selector: 'app-ai-monitor',
  templateUrl: './ai-monitor.component.html',
  styleUrls: ['./ai-monitor.component.css']
})
export class AiMonitorComponent implements OnInit {
refreshData() {
throw new Error('Method not implemented.');
}
  public predictionData: any;
  public predictionChart: any;

  constructor(private predictionService: PredictionService) { }

  ngOnInit(): void {
    this.fetchPredictionData();
  }

  fetchPredictionData() {
    this.predictionService.getPredictions().subscribe(data => {
      this.predictionData = data;
      this.createChart();
    });
  }

  createChart() {
    Chart.register(...registerables);
    this.predictionChart = new Chart('predictionChart', {
      type: 'line', // Type de graphique, changez selon vos besoins
      data: {
        labels: this.predictionData.labels,
        datasets: [
          {
            label: 'Prédictions',
            data: this.predictionData.values,
            borderColor: '#42A5F5',
            backgroundColor: 'rgba(66, 165, 245, 0.2)',
            borderWidth: 1
          }
        ]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            display: true
          },
          tooltip: {
            callbacks: {
              label: function(tooltipItem: any) {
                return `Prédiction: ${tooltipItem.raw}`;
              }
            }
          }
        }
      }
    });
  }
}
