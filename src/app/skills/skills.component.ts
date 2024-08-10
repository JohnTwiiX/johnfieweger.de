import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  skillName = ['', '', '', '', '', '', '', '', ''];
  skillImg = ['', '', '', '', '', '', '', '', ''];

  skill = [
    {
      'name': 'JavaScript',
      'img': 'javascript',
      'animation': 'data-aos="fade-right"'
    },
    {
      'name': 'TypeScript',
      'img': 'typeScript',
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
      'name': 'Firebase',
      'img': 'firebase'
    },
    {
      'name': 'AWS',
      'img': 'aws'
    },
    {
      'name': 'Git',
      'img': 'git'
    },
    {
      'name': 'Docker',
      'img': 'docker'
    },
    {
      'name': 'Python',
      'img': 'python'
    },
    {
      'name': 'Django',
      'img': 'django'
    },
    {
      'name': 'Rest API',
      'img': 'restapi'
    },
    {
      'name': 'Databases',
      'img': 'database'
    },
    {
      'name': 'Test Automation',
      'img': 'test'
    },
    {
      'name': 'React / -Native',
      'img': 'react-reactnative'
    },
    {
      'name': 'Design Thinking',
      'img': 'thinking'
    },
    {
      'name': 'SCRUM',
      'img': 'scrum'
    }
  ]

  constructor() { }

  ngOnInit(): void {


  }

}
