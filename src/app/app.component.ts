import { AfterViewInit, Component, OnInit } from '@angular/core';
import { RouterOutlet, Router } from '@angular/router';
import AOS from 'aos';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'Portfolio';
  constructor(public router: Router) { }

  ngOnInit(): void {
    AOS.init({
      duration: 750,
      delay: 150,
    });
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      AOS.refresh()
    }, 500)
  }

}
