import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent implements OnInit, AfterViewInit{

  @ViewChild('stickyMenu') menuElement: ElementRef;

  sticky = false;
  elementPosition: number;

  navbarOpen = false;

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.elementPosition = this.menuElement.nativeElement.offsetTop;
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event) {
    const windowScroll: number = window.pageYOffset;
    if (windowScroll > this.elementPosition)
    {
      this.sticky = true;

    } else {
      this.sticky = false;
    }
  }

}
