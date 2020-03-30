import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prestation-category',
  templateUrl: './prestation-category.component.html',
  styleUrls: ['./prestation-category.component.scss']
})
export class PrestationCategoryComponent implements OnInit {

  title: string = "Maquillage";
  constructor() { }
  ngOnInit(): void {
  }

}
