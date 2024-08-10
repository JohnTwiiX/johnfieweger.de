import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  public buttons = ['All', 'JavaScript', 'Angular', 'Django', 'Cloud'];
  public portfolio = [
    {
      'name': 'El Pollo Loco',
      'img': 'elpolloloco.png',
      'description': 'based jump and run game (OOP)',
      'engine': 'JavaScript',
      'address': 'https://elpollo.johnfieweger.de/'
    },
    {
      'name': 'KanbanBoard',
      'img': 'KanbanBoard.png',
      'description': 'simple Kanban-Board for my Tasks',
      'engine': 'Angular Cloud',
      'address': 'https://kanban.johnfieweger.de/'
    },
    // {
    //   'name': 'Pokedex',
    //   'img': 'pokedex.jpg',
    //   'description': 'A Pokedex with some Pokemon`s',
    //   'engine': 'JavaScript',
    //   'address': 'http://john-fieweger.developerakademie.net/pokedex/pokedex.html'
    // },
    {
      'name': 'Videoflix',
      'img': 'videoflix.png',
      'description': 'My Netflix Clone',
      'engine': 'Angular Django',
      'address': 'https://videoflix.johnfieweger.de/'
    },
    {
      'name': 'Website',
      'img': 'meine-webseite.png',
      'description': 'My Homepage',
      'engine': 'Angular',
      'address': 'https://johnfieweger.de/'
    },
    {
      'name': 'Ring of Fire',
      'img': 'cards.jpg',
      'description': 'A little card drinking game',
      'engine': 'Angular Cloud',
      'address': 'https://ring.johnfieweger.de/'
    },
    {
      'name': 'Taxi4Berlin.de',
      'img': 'website-serkan.png',
      'description': 'A website for Serkan Demir',
      'engine': 'JavaScript',
      'address': 'https://taxi4berlin.de/'
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
