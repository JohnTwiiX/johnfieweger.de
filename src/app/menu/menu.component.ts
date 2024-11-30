import { Component, Input, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  imports: [MatMenuModule, MatIconModule]
})
export class MenuComponent implements OnInit {

  // @Input() darkMode = true;

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

}
