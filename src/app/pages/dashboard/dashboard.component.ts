import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Chart, ArcElement, DoughnutController, Tooltip, Legend, PieController, Title, BarController, CategoryScale, LinearScale, BarElement } from 'chart.js';
import { CardComponent } from '../../components/card/card.component';
import { ChartComponent } from '../../components/chart/chart.component';
import { ICard } from '../../interfaces/card';
import { IChart } from '../../interfaces/chart';

Chart.register(ArcElement, DoughnutController, PieController, BarController, Tooltip, Legend, Title, CategoryScale, LinearScale, BarElement);

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CardComponent, NgFor, ChartComponent],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  infoCards: ICard[] = [];
  infoChartPie: IChart = {
    type: 'pie',
    data: [],
    options: []
  };
  infoChartBar: IChart = {
    type: 'bar',
    data: [],
    options: []
  };

  constructor() {}

  ngOnInit() {
    this.loadInfoCards();
    this.loadInfoChartPie();
    this.loadInfoChartBar();
  }

  loadInfoCards(): void {
    this.infoCards = [
      {
        title: "Mercado Pago",
        price: 1000,
        description: "+1.5 from last week",
        color: "#2abcff",
        icon: '/mercado-pago.svg'
      },
      {
        title: "Santander",
        price: 2000,
        description: "+2.5 from last week", 
        color: "#ec0000",
        icon: '/santander.svg'
      },
      {
        title: "Brubank",
        price: 3000,
        description: "+3.5 from last week",
        color: "#624bd9",
        icon: '/brubank.webp'
      }
    ];
  }

  loadInfoChartPie(): void {
    this.infoChartPie.data = {
      labels: this.infoCards.map(item => item.title),
      datasets: [{
        label: 'My First Dataset',
        data: this.infoCards.map(item => item.price),
        backgroundColor: this.infoCards.map(item => item.color),
        borderWidth: 1
      }]
    };
    this.infoChartPie.options = {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: 'top'
        }, 
        title: {
          display: true, 
          text: 'Grafico',
          font: {
              size: 30,
          },
          padding: {
              top: 0,
              bottom: 30
          }
        }
      }
    }
  }

  loadInfoChartBar(): void {
    this.infoChartBar.data = {
      labels: [
        'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
        'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
      ],
      datasets: [{
        data: [2.2, 2.4, 3.7, 2.8, 0, 0, 0, 0, 0, 0, 0, 0],
        backgroundColor: [
          'rgb(255, 99, 132)',
          'rgb(255, 159, 64)',
          'rgb(255, 205, 86)',
          'rgb(75, 192, 192)',
          'rgb(54, 162, 235)',
          'rgb(153, 102, 255)',
          'rgb(201, 203, 207)',
          'rgb(100, 181, 246)',
          'rgb(255, 138, 128)',
          'rgb(174, 213, 129)',
          'rgb(255, 202, 40)',
          'rgb(126, 87, 194)'
        ],
        borderWidth: 1
      }]
    };
    this.infoChartBar.options = {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: 'top'
        }, 
        title: {
          display: true, 
          text: 'Inflación',
          font: {
              size: 30,
          },
          padding: {
              top: 0,
              bottom: 30
          }
        }
      }
    }
  }

  showOverlay(event: ICard): void {
    console.log(event);
  }
}
