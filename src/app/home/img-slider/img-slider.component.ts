import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-img-slider',
  templateUrl: './img-slider.component.html',
  styleUrls: ['./img-slider.component.css']
})
export class ImgSliderComponent implements OnInit {

  public imgSize = {
    width: 1110,
    height: 600
  }
  public imageObject: Array<object> = [
    {
      image: 'assets/images/slide1.jpg',
      thumbImage: 'assets/images/slide1.jpg',
      title: 'welcome to bookstore'
    },
    {
      image: 'assets/images/slide2.jpg',
      thumbImage: 'assets/images/slide2.jpg',
      title: 'welcome to bookstore'
    },
    {
      image: 'assets/images/slide3.jpg',
      thumbImage: 'assets/images/slide3.jpg',
      title: 'welcome to bookstore'
    },
    {
      image: 'assets/images/slide4.jpg',
      thumbImage: 'assets/images/slide4.jpg',
      title: 'welcome to bookstore'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
