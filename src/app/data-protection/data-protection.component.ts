import { Component, OnInit } from '@angular/core';
import { MenuComponent } from "../menu/menu.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-data-protection',
  templateUrl: './data-protection.component.html',
  styleUrls: ['./data-protection.component.scss'],
  imports: [MenuComponent, FooterComponent]
})
export class DataProtectionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
