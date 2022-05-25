import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  images = ['berufsschule.jpg', 'bundeswehr.jpg', 'code.jpg'];
  currentImage = 0;
  showImage = true;

  ngOnInit(): void {
    this.updateImages();
  }

  updateImages(){

    setInterval(()=>{
      this.currentImage++;
      this.currentImage = this.currentImage % this.images.length; // % Modulo rechnet den Rest aus.. heißt alle 8sek 0, 1, 2.. 0, 1, 2.. fängt immer wieder von vorne an
      this.showImage = false;

      setTimeout(()=>{
        this.showImage = true;
      }, 10);
    }, 8000);

  }
}
