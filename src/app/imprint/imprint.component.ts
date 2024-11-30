import { Component, OnInit } from '@angular/core';
import { FooterComponent } from "../footer/footer.component";
import { MenuComponent } from "../menu/menu.component";

@Component({
  selector: 'app-imprint',
  templateUrl: './imprint.component.html',
  styleUrls: ['./imprint.component.scss'],
  imports: [FooterComponent, MenuComponent]
})
export class ImprintComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
