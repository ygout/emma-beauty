import { Component, OnInit, HostListener} from '@angular/core';

@Component({
  selector: 'app-home-banner',
  templateUrl: './home-banner.component.html',
  styleUrls: ['./home-banner.component.scss']
})
export class HomeBannerComponent implements OnInit {

  display: boolean = true;
  bannerUrlPath = "/assets/images/beauty1.jpg";
  constructor() { }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    if(event.target.innerWidth <= 930)
      this.display = false;
    else
      this.display = true;

  }
  ngOnInit(): void {
  }

}
