import { Component, OnInit } from "@angular/core";
import { Title } from "@angular/platform-browser";
import { Category, Image } from "@/shared/models";
import {
  trigger,
  state,
  style,
  transition,
  animate,
  group,
} from "@angular/animations";
import { ImageService } from "@/shared/services/image.service";

@Component({
  selector: "app-gallery",
  templateUrl: "./gallery.component.html",
  styleUrls: ["./gallery.component.scss"],
  animations: [
    trigger("simpleFadeAnimation", [
      state(
        "in",
        style({
          opacity: 1,
        })
      ),

      // fade in when created. this could also be written as transition('void => *')
      transition(":enter", [style({ opacity: 0 }), animate(600)]),

      // fade out when destroyed. this could also be written as transition('void => *')
      transition(":leave", animate(600, style({ opacity: 0 }))),
    ]),
  ],
})
export class GalleryComponent implements OnInit {
  title = "Mes Expériences";
  limit = 5;
  masonryImages: Image[];
  dummyPictures: Image[];
  categories: Category[] = [
    {
      id: "MAKEUP",
      title: "Maquillage",
    },
    {
      id: "CARE",
      title: "Soins",
    },
    {
      id: "MASSAGE",
      title: "Massage",
    },
  ];
  constructor(
    private titleService: Title,
    private imageService: ImageService
  ) {}

  // set property show to true for category selectionned
  showPictureByCategory(categoryId: string) {
    // ALL PICTURES
    this.dummyPictures.map((el) => {
      if (categoryId === "ALL" || el.tag === categoryId) el.show = true;
      else el.show = false;
    });

    console.log("showPictureByCategory", this.dummyPictures);

    this.masonryImages = this.dummyPictures.slice(0, this.limit);
  }

  filteredByCategorySelected(categoryId: string) {
    let imagesFilteredByCategory = [];

    if (categoryId === "ALL") {
      this.masonryImages = this.dummyPictures.slice(0, this.limit);
      return;
    }

    this.dummyPictures.forEach((element) => {
      console.log(element);

      if (element.tag === categoryId) {
        imagesFilteredByCategory.push(element);
      }
    });

    this.masonryImages = imagesFilteredByCategory.slice(0, this.limit);
  }

  ngOnInit(): void {
    this.titleService.setTitle(this.title);
    this.imageService
      .getImages()
      .subscribe((images) => (this.dummyPictures = images));
    this.showPictureByCategory("ALL");
  }

  showMoreImages() {
    this.limit += 15;
    this.masonryImages = this.dummyPictures.slice(0, this.limit);
  }
}
