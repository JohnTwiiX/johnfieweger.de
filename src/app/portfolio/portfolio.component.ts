import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  portfolio = [
    {
      'name': 'El Pollo Loco',
      'img': 'elpolloloco.png',
      'description': 'based jump and run game (OOP)',
      'engine': 'Java Script'
    },
    {
      'name': 'Join',
      'img': 'join.png',
      'description': 'simple Kanban-Board (Group Project)',
      'engine': 'Java Script'
    },
    {
      'name': 'Pokedex',
      'img': 'pokedex.jpg',
      'description': 'A Pokedex with some Pokemon`s',
      'engine': 'Java Script'
    },
    {
      'name': 'Website',
      'img': 'website.png',
      'description': 'My Homepage',
      'engine': 'Angular'
    },
    {
      'name': 'Ring of Fire',
      'img': 'cards.jpg',
      'description': 'A little card drinking game',
      'engine': 'Angular'
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
