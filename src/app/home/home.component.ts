import { Component, OnInit } from '@angular/core';
import { MenuComponent } from "../menu/menu.component";
import { SkillsComponent } from "../skills/skills.component";
import { PortfolioComponent } from "../portfolio/portfolio.component";
import { AboutComponent } from "../about/about.component";
import { ContactComponent } from "../contact/contact.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  imports: [MenuComponent, SkillsComponent, PortfolioComponent, AboutComponent, ContactComponent, FooterComponent]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
