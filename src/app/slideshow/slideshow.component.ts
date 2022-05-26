import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.scss']
})
export class SlideshowComponent implements OnInit {

  images = ['berufsschule.jpg', 'bundeswehr.jpg', 'code.jpg'];
  headlines = [
  'Start my joblife', 
  'Join the Bundeswehr', 
  'Bring engineering to the next level'
];
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
