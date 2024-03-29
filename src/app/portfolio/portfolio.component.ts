import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  public buttons = ['All', 'JavaScript', 'Angular'];
  public portfolio = [
    {
      'name': 'El Pollo Loco',
      'img': 'elpolloloco.png',
      'description': 'based jump and run game (OOP)',
      'engine': 'JavaScript',
      'address': 'https://elpolloloco.web.app/'
    },
    {
      'name': 'KanbanBoard',
      'img': 'KanbanBoard.png',
      'description': 'simple Kanban-Board for my Tasks',
      'engine': 'JavaScript',
      'address': 'https://kanbanboard-john.web.app/'
    },
    {
      'name': 'Pokedex',
      'img': 'pokedex.jpg',
      'description': 'A Pokedex with some Pokemon`s',
      'engine': 'JavaScript',
      'address': 'http://john-fieweger.developerakademie.net/pokedex/pokedex.html'
    },
    {
      'name': 'Website',
      'img': 'meine-webseite.png',
      'description': 'My Homepage',
      'engine': 'Angular',
      'address': 'https://john-fieweger.web.app'
    },
    {
      'name': 'Ring of Fire',
      'img': 'cards.jpg',
      'description': 'A little card drinking game',
      'engine': 'Angular',
      'address': 'https://ring-of-fire-6724b.web.app'
    },
    {
      'name': 'Taxi4Berlin.de',
      'img': 'website-serkan.png',
      'description': 'A website for Serkan Demir',
      'engine': 'JavaScript',
      'address': 'https://taxi4berlin.de'
    },
  ];
  filterInActive = true;

  public currentName: string = 'All';


  constructor() { }

  ngOnInit(): void {

  }

  active(id: any) {
    this.currentName = id;
    this.filterInActive = false;
    if (this.currentName == 'All') {
      this.filterInActive = true;
    }
    console.log(this.currentName);
  }

}
