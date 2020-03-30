import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-prestations',
  templateUrl: './prestations.component.html',
  styles: []
})
export class PrestationsComponent implements OnInit {

  title = "Mes Préstations";
  constructor(private titleService: Title) { }

  ngOnInit(): void {
    this.titleService.setTitle(this.title);
  }

}
