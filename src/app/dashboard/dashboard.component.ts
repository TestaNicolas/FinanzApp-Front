import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CardComponent, NgFor],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})

export class DashboardComponent implements OnInit {
  items: any[] = [];

  constructor () {}

  async ngOnInit() {
    await this.loadCards()
  }

  showOverlay(event: PointerEvent): void {
    console.log(event);
  }

  async loadCards(): Promise<void> {
    this.items = 
    [
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
        description: "+2.5 from last wee",
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

}
