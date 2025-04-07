import { NgFor, NgForOf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CardModule } from 'primeng/card';
import { TagModule } from 'primeng/tag';
import { MenuItem } from 'primeng/api';
import { MenuModule } from 'primeng/menu';
import { ButtonModule } from 'primeng/button';
import { TabMenuModule } from 'primeng/tabmenu';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import { InputNumberModule } from 'primeng/inputnumber';
import { CheckboxModule } from 'primeng/checkbox';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CardModule, NgFor, TagModule, MenuModule, ButtonModule, TabMenuModule, DialogModule, DropdownModule, FormsModule, InputNumberModule, CheckboxModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})

export class DashboardComponent implements OnInit {
  optionsCard: MenuItem[] | undefined;
  visible: boolean = false;
  informationDashboard: any;
  types: any;
  selectedType: any;
  value1: number = 42723;
  selectedCategories: any[] = [];

  categories: any[] = [
      { name: 'Esta invertido', key: 'A' },
      { name: 'Es dolar', key: 'M' },
  ];

  constructor () {}

  ngOnInit() {
    this.optionsCard = 
    [
      {
          label: 'Opciones',
          items: [
              {
                  label: 'Editar',
                  icon: 'pi pi-pencil'
              },
              {
                  label: 'Eliminar',
                  icon: 'pi pi-trash'
              }
          ]
      }
    ];
    this.loadInformationDashboard();
    this.loadTypes();
  }

  showDialog() {
    this.visible = true;
  }

  loadInformationDashboard() {
    this.informationDashboard = {
      "resumen": [
        {
          "string": "Total Finanzas",
          "value": 10000
        },
        {
          "string": "Total Invertido",
          "value": 5000
        },
        {
          "string": "Total No Invertido",
          "value": 5000
        },
      ],
      "finance": [
        {
          "value": 1000,
          "invested": true,
          "type": "Mercado Pago",
          "currency": "Dolar"
        },
        {
          "value": 1000,
          "invested": false,
          "type": "Santander",
          "currency": "Peso Argentino"
        },
        {
          "value": 1000,
          "invested": false,
          "type": "Santander",
          "currency": "Peso Argentino"
        },
        {
          "value": 1000,
          "invested": false,
          "type": "Santander",
          "currency": "Peso Argentino"
        },
        {
          "value": 1000,
          "invested": true,
          "type": "Mercado Pago",
          "currency": "Dolar"
        },
        {
          "value": 1000,
          "invested": false,
          "type": "Santander",
          "currency": "Peso Argentino"
        },
        {
          "value": 1000,
          "invested": false,
          "type": "Santander",
          "currency": "Peso Argentino"
        },
              {
          "value": 1000,
          "invested": false,
          "type": "Santander",
          "currency": "Peso Argentino"
        }
      ]
    };
  }

  loadTypes() {
    this.types = [
      { name: 'Mercado Pago', code: 'MP' },
      { name: 'Santander', code: 'SA' },
      { name: 'Plazo Fijo', code: 'PF' }
  ];
  }

}
