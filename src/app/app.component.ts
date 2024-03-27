import { Component, OnInit } from '@angular/core';
import { CardsData } from './interfaces/cards-data.interface';
import { ApiService } from './services/api.service';
import { error } from 'console';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  primaryCards: CardsData[] = [];
  secondaryCards: CardsData[] = [];
  name: string = 'Beverley'
  title: string = 'klaro'

  constructor(private ApiService: ApiService) {}

  ngOnInit(): void {
    this.ApiService.getCardsData().subscribe({
      next: cards => {
        cards.map(card => {
          card.type === "primary" ? this.primaryCards.push(card) : this.secondaryCards.push(card);
        });
      }, 
      error: error => console.log("There is an error", error)
    });
  }

}
