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
    'description': 'In my journey, I began an apprenticeship as a process mechanic for plastics and rubber technology.',
    'img': 'walk-line.png'
  },
  {
    'title': 'FIRST EXPERIENCES',
    'description': 'This training gave me my first experience with programming. This inspired me to deal more with the topic.',
    'img': 'heart-line.png'
  },
  {
    'title': 'DISCOVERY',
    'description': 'In my career as a soldier I was in several positions where I had experienced a lot with IT. That is when I decided to become an active programmer.',
    'img': 'search-line.png'
  },
  {
    'title': 'NEW CHALLENGES',
    'description': 'Now I love programming and will face any challenge that comes my way.',
    'img': 'flight-takeoff-line.png'
  }
]

  constructor() { }

  ngOnInit(): void {
  }

}
