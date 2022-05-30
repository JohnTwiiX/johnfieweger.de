import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
skillName = ['', '', '', '', '', '', '', '', ''];
skillImg = ['', '', '', '', '', '', '', '', ''];

skill= [
  {
    'name': 'Java Script',
    'img': 'java script'
  },
  {
    'name': 'Angular',
    'img': 'angular'
  },
  {
    'name': 'HTML / CSS',
    'img': 'Group 205'
  },
  {
    'name': 'SCRUM',
    'img': 'Group 226'
  },
  {
    'name': 'Git',
    'img': 'Git-Icon-1788C 2'
  },
  {
    'name': 'Design Thinking',
    'img': 'Group 20'
  },
  {
    'name': 'Rest API',
    'img': 'icons8-rest-api-80 2'
  },
  {
    'name': 'Test Automation',
    'img': 'icons8-test-lab-96 2'
  },
  {
    'name': 'Databases',
    'img': 'icons8-database-52 2'
  }
]

  constructor() { }

  ngOnInit(): void {
    
  }

}
