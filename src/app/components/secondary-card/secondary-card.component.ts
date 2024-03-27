import { Component, Input } from '@angular/core';
import { CardsData } from '../../interfaces/cards-data.interface';

@Component({
  selector: 'app-secondary-card',
  templateUrl: './secondary-card.component.html',
  styleUrl: './secondary-card.component.scss'
})
export class SecondaryCardComponent {
  @Input() card: CardsData = {title: '', illustrationSrc: '', buttonLabel: '', type: '', id: ''};
}
