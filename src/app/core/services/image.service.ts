import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Image } from '../models';


@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor() { }

  private IMAGES :Image[] = [
    {
      id: "image1",
      url: "https://source.unsplash.com/433x649/?Uruguay",
      tag: "MAKEUP",
      show: true,
      title: "",
    },
    {
      id: "image2",
      url: "https://source.unsplash.com/530x572/?Jamaica",
      tag: "MAKEUP",
      show: true,
      title: ""
    },
    {
      id: "image3",
      url: "https://source.unsplash.com/531x430/?Kuwait",
      tag: "MASSAGE",
      show: true,
      title: ""
    },
    {
      id: "image4",
      url: "https://source.unsplash.com/586x1073/?Bermuda",
      tag: "MASSAGE",
      show: true,
      title: ""
    },
    {
      id: "image5",
      url: "https://source.unsplash.com/500x571/?Ecuador",
      tag: "CARE",
      show: true,
      title: ""
    },
    {
      id: "image6",
      url: "https://source.unsplash.com/579x518/?Virgin Islands (British)",
      tag: "CARE",
      show: true,
      title: ""
    },
    {
      id: "image7",
      url: "https://source.unsplash.com/503x548/?Angola",
      tag: "CARE",
      show: true,
      title: ""
    },
  ];

  getImages(): Observable<Image[]> {
    return of(this.IMAGES);
  }
}
