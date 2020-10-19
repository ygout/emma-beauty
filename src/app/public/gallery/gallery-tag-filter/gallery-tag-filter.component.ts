import { Category } from '@/core/models';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-gallery-tag-filter',
  templateUrl: './gallery-tag-filter.component.html',
  styleUrls: ['./gallery-tag-filter.component.scss']
})
export class GalleryTagFilterComponent implements OnInit {

  @Input() AllImageCategories: Category[];
  @Output() selectedCategory: EventEmitter<string> = new EventEmitter<string>();
  activeCategory: Category;
  constructor() { }

  ngOnInit(): void {
    this.AllImageCategories.unshift({id: "ALL", title: "Tous"});
  }

  onSelectedCategory(categorySelected: Category) {
    this.selectedCategory.emit(categorySelected.id);
    this.activeCategory = categorySelected;
  }

}
