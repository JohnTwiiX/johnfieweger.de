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
      'engine': 'Java Script',
      'address': 'http://john-fieweger.developerakademie.net/ElPolloLoco-V2/index.html'
    },
    {
      'name': 'Join',
      'img': 'join.png',
      'description': 'simple Kanban-Board (Group Project)',
      'engine': 'Java Script',
      'address': 'https://john-fieweger.developerakademie.net/prjKanban/index.html'
    },
    {
      'name': 'Pokedex',
      'img': 'pokedex.jpg',
      'description': 'A Pokedex with some Pokemon`s',
      'engine': 'Java Script',
      'address': 'http://john-fieweger.developerakademie.net/pokedex/pokedex.html'
    },
    {
      'name': 'Website',
      'img': 'website.png',
      'description': 'My Homepage',
      'engine': 'Angular',
      'address': 'http://john-fieweger.developerakademie.net/johnfieweger'
    },
    {
      'name': 'Ring of Fire',
      'img': 'cards.jpg',
      'description': 'A little card drinking game',
      'engine': 'Angular',
      'address': 'https://john-fieweger.developerakademie.net/ringoffire'
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
