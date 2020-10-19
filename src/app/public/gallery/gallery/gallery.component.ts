import { Component, OnInit } from "@angular/core";
import { Title } from "@angular/platform-browser";
import { IMasonryGalleryImage } from 'ngx-masonry-gallery';
import { Lightbox, IAlbum } from 'ngx-lightbox';
import { Category, Image } from '@/core/models';
import { ImageService } from '@/core/services/image.service';

class ImageMansory implements IMasonryGalleryImage, IAlbum{
  imageUrl: string;
  alt?: string;
  id: number;
  src: string;
  thumb: string;
}

@Component({
  selector: "app-gallery",
  templateUrl: "./gallery.component.html",
  styleUrls: ["./gallery.component.scss"],
})

export class GalleryComponent implements OnInit {

  title = "Galerie";
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
  constructor(private _titleService: Title, private _lightbox: Lightbox, private _imageService: ImageService) { }

  public get images(): ImageMansory[] {
    return this.masonryImages.map((m, index) => {
      return <ImageMansory>{
        imageUrl: m.url,
        id: index,
        src: m.url,
      }
    }
    );
  }

  filteredByCategorySelected(categoryId: string) {
    let imagesFilteredByCategory = [];

    if (categoryId === "ALL") {
      this.masonryImages = this.dummyPictures.slice(0, this.limit);
      return;
    }

    this.dummyPictures.forEach((element) => {
      if (element.tag === categoryId) {
        imagesFilteredByCategory.push(element);
      }
    });

    this.masonryImages = imagesFilteredByCategory.slice(0, this.limit);
  }

  ngOnInit(): void {
    this._titleService.setTitle(this.title);
    this._imageService
      .getImages()
      .subscribe((images) => (this.dummyPictures = images));
    this.filteredByCategorySelected("ALL");
  }

  showMoreImages() {
    this.limit += 15;
    this.masonryImages = this.dummyPictures.slice(0, this.limit);
  }

  open(image: ImageMansory): void {
    // open lightbox
    this._lightbox.open(this.images, image.id);
  }

  close(): void {
    // close lightbox programmatically
    this._lightbox.close();
  }
}
