import { Component, Input } from '@angular/core';
import { CardsData } from '../../interfaces/cards-data.interface';

@Component({
  selector: 'app-primary-card',
  templateUrl: './primary-card.component.html',
  styleUrl: './primary-card.component.scss'
})
export class PrimaryCardComponent {
  @Input() card: CardsData = {title: '', illustrationSrc: '', buttonLabel: '', type: '', id: ''};
}
