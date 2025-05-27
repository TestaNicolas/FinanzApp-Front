import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input() titulo: string = 'Título por defecto';
  @Input() price: number = 0;
  @Input() description: string = '+2.5 from last week';
  @Input() color: string = 'Color por defecto'
  @Input() icon?: string = 'Icono por defecto'
}
