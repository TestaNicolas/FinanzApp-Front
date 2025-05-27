import { Component, Input, OnChanges, SimpleChanges, ElementRef, ViewChild } from '@angular/core';
import { Chart, ChartTypeRegistry } from 'chart.js';

@Component({
  selector: 'app-chart',
  standalone: true,
  templateUrl: './chart.component.html',
  styleUrl: './chart.component.scss'
})
export class ChartComponent implements OnChanges {
  // @Input() labels: string[] = [];
  // @Input() datasetsColor: string[] = [];
  // @Input() datasetsValue: number[] = [];
  @Input() type: keyof ChartTypeRegistry = 'doughnut';
  @Input() data: any;
  @Input() options: any;

  @ViewChild('chartCanvas', { static: true }) chartCanvas!: ElementRef<HTMLCanvasElement>;

  chart: Chart | undefined;

  ngOnChanges(changes: SimpleChanges): void {
    if (this.data) {
      console.log(this.data)
      this.renderChart();
    }
  }

  renderChart(): void {
    console.log(this.data)
    if (this.chart) {
      this.chart.destroy(); 
    }

    this.chart = new Chart(this.chartCanvas.nativeElement, {
      type: this.type,
      data: this.data,
      options: this.options
    });
  }
}
