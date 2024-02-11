import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
journey = [
  {
    'title': 'BEGINNING OF MY JOURNEY',
    'description': 'Started as a frontend web developer, fell in love with HTML, CSS, and JavaScript – the basics that sparked my coding passion.',
    'img': 'walk-line.png'
  },
  {
    'title': 'FIRST EXPERIENCES',
    'description': 'Worked in various roles, learned numerous programming languages – a journey that shaped my adaptability and expertise.',
    'img': 'heart-line.png'
  },
  {
    'title': 'DISCOVERY',
    'description': 'Programmed websites, apps, and games for fun, realized I want to bring this joy to clients too.',
    'img': 'search-line.png'
  },
  {
    'title': 'NEW CHALLENGES',
    'description': 'Ready for more! Expanding my skills to create websites, apps, and games that break new ground.',
    'img': 'flight-takeoff-line.png'
  }
]

  constructor() { }

  ngOnInit(): void {
  }

}
