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
    'name': 'JavaScript',
    'img': 'javascript',
    'animation': 'data-aos="fade-right"'
  },
  {
    'name': 'HTML',
    'img': 'html'
  },
  {
    'name': 'CSS',
    'img': 'css'
  },
  {
    'name': 'SCSS',
    'img': 'scss'
  },
  {
    'name': 'Angular',
    'img': 'angular'
  },
  {
    'name': 'React / -Native',
    'img': 'react-reactnative'
  },
  {
    'name': 'SCRUM',
    'img': 'scrum'
  },
  {
    'name': 'Git',
    'img': 'git'
  },
  {
    'name': 'Design Thinking',
    'img': 'thinking'
  },
  {
    'name': 'Rest API',
    'img': 'restapi'
  },
  {
    'name': 'Firebase',
    'img': 'firebase'
  },
  {
    'name': 'Test Automation',
    'img': 'test'
  },
  {
    'name': 'Databases',
    'img': 'database'
  }
]

  constructor() { }

  ngOnInit(): void {
    

  }

}
