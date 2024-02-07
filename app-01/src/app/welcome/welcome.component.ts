import { Component } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {

  userName:string;
  banners:string[];
  bannerIndex:number;

  constructor(){
    this.userName="Somebody";
    this.bannerIndex=0;
    this.banners=[
      "assets/imgs/w1.jpg",
      "assets/imgs/w2.jpg",
      "assets/imgs/w3.png",
      "assets/imgs/w4.jpg"
    ];
  }

  toggleBanner(){
    this.bannerIndex++;
    if(this.bannerIndex===this.banners.length){
      this.bannerIndex=0;
    }
  }

}
