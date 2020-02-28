import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-banner',
  templateUrl: './home-banner.component.html',
  styleUrls: ['./home-banner.component.scss']
})
export class HomeBannerComponent implements OnInit {

  bannerUrlPath = "/assets/images/beauty1.jpg";
  constructor() { }

  ngOnInit(): void {
  }

}
