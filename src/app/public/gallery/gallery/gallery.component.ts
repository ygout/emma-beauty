import { Component, OnInit } from "@angular/core";
import { Title } from "@angular/platform-browser";
import { Category } from "@/shared/models";
import { IMasonryGalleryImage } from 'ngx-masonry-gallery';


@Component({
  selector: "app-gallery",
  templateUrl: "./gallery.component.html",
  styleUrls: ["./gallery.component.scss"],
})
export class GalleryComponent implements OnInit {
  title = "Mes Expériences";
  limit = 5;
  masonryImages;
  dummyPictures = [
    {
      imgSrc: "https://source.unsplash.com/433x649/?Uruguay",
      tag: "MAKEUP",
    },
    {
      imgSrc: "https://source.unsplash.com/530x572/?Jamaica",
      tag: "MAKEUP",
    },
    {
      imgSrc: "https://source.unsplash.com/531x430/?Kuwait",
    },
    {
      imgSrc: "https://source.unsplash.com/586x1073/?Bermuda",
    },
    {
      imgSrc: "https://source.unsplash.com/500x571/?Ecuador",
    },
    {
      imgSrc: "https://source.unsplash.com/579x518/?Virgin Islands (British)",
    },
    {
      imgSrc: "https://source.unsplash.com/503x548/?Angola",
    },
    {
      imgSrc: "https://source.unsplash.com/511x630/?Mauritania",
    },
    {
      imgSrc: "https://source.unsplash.com/414x767/?Sri Lanka",
    },
    {
      imgSrc: "https://source.unsplash.com/443x704/?St. Helena",
    },
    {
      imgSrc: "https://source.unsplash.com/441x1145/?Namibia",
    },
    {
      imgSrc: "https://source.unsplash.com/491x1097/?Samoa",
    },
    {
      imgSrc: "https://source.unsplash.com/570x851/?Eritrea",
    },
    {
      imgSrc: "https://source.unsplash.com/560x1072/?Iraq",
    },
    {
      imgSrc: "https://source.unsplash.com/551x598/?Togo",
    },
    {
      imgSrc: "https://source.unsplash.com/518x813/?Romania",
    },
    {
      imgSrc: "https://source.unsplash.com/497x524/?Kenya",
    },
    {
      imgSrc: "https://source.unsplash.com/549x826/?Martinique",
    },
    {
      imgSrc: "https://source.unsplash.com/559x627/?Tokelau",
    },
    {
      imgSrc: "https://source.unsplash.com/594x513/?Belize",
    },
    {
      imgSrc: "https://source.unsplash.com/480x1181/?Virgin Islands (US)",
    },
    {
      imgSrc: "https://source.unsplash.com/526x552/?Chile",
    },
    {
      imgSrc: "https://source.unsplash.com/427x504/?Western Sahara",
    },
    {
      imgSrc: "https://source.unsplash.com/468x971/?St. Pierre and Miquelon",
    },
    {
      imgSrc: "https://source.unsplash.com/419x790/?Thailand",
    },
    {
      imgSrc: "https://source.unsplash.com/417x1125/?Myanmar",
    },
    {
      imgSrc: "https://source.unsplash.com/480x632/?Cocos (Keeling Islands)",
    },
    {
      imgSrc: "https://source.unsplash.com/416x900/?Belarus",
    },
    {
      imgSrc: "https://source.unsplash.com/408x837/?Panama",
    },
    {
      imgSrc: "https://source.unsplash.com/541x1021/?Slovak Republic",
    },
    {
      imgSrc: "https://source.unsplash.com/597x1107/?Malta",
    },
    {
      imgSrc: "https://source.unsplash.com/487x842/?Bahrain",
    },
    {
      imgSrc: "https://source.unsplash.com/403x904/?Somalia",
    },
    {
      imgSrc: "https://source.unsplash.com/544x515/?Morocco",
    },
    {
      imgSrc: "https://source.unsplash.com/577x1044/?Djibouti",
    },
    {
      imgSrc: "https://source.unsplash.com/404x437/?France, Metropolitan",
    },
    {
      imgSrc: "https://source.unsplash.com/482x1079/?Libya",
    },
    {
      imgSrc: "https://source.unsplash.com/473x887/?Bolivia",
    },
    {
      imgSrc: "https://source.unsplash.com/583x614/?Kazakhstan",
    },
    {
      imgSrc: "https://source.unsplash.com/592x838/?Guyana",
    },
    {
      imgSrc: "https://source.unsplash.com/422x731/?Switzerland",
    },
    {
      imgSrc: "https://source.unsplash.com/448x985/?Venezuela",
    },
    {
      imgSrc: "https://source.unsplash.com/494x936/?Uzbekistan",
    },
    {
      imgSrc: "https://source.unsplash.com/461x762/?Benin",
    },
    {
      imgSrc: "https://source.unsplash.com/550x676/?Palau",
    },
    {
      imgSrc: "https://source.unsplash.com/524x901/?Laos",
    },
    {
      imgSrc:
        "https://source.unsplash.com/594x1199/?French Southern Territories",
    },
    {
      imgSrc: "https://source.unsplash.com/557x662/?Malawi",
    },
    {
      imgSrc: "https://source.unsplash.com/428x1184/?Swaziland",
    },
    {
      imgSrc: "https://source.unsplash.com/433x631/?Lithuania",
    },
    {
      imgSrc: "https://source.unsplash.com/523x477/?Sweden",
    },
    {
      imgSrc: "https://source.unsplash.com/568x443/?Bahamas",
    },
    {
      imgSrc: "https://source.unsplash.com/434x448/?United Arab Emirates",
    },
    {
      imgSrc: "https://source.unsplash.com/566x740/?Puerto Rico",
    },
    {
      imgSrc: "https://source.unsplash.com/481x580/?Nicaragua",
    },
    {
      imgSrc: "https://source.unsplash.com/470x761/?Viet Nam",
    },
    {
      imgSrc: "https://source.unsplash.com/519x954/?Australia",
    },
    {
      imgSrc: "https://source.unsplash.com/405x1030/?Marshall Islands",
    },
    {
      imgSrc:
        "https://source.unsplash.com/587x1059/?Falkland Islands (Malvinas)",
    },
    {
      imgSrc: "https://source.unsplash.com/593x907/?Montserrat",
    },
    {
      imgSrc:
        "https://source.unsplash.com/462x729/?British Indian Ocean Territory",
    },
    {
      imgSrc: "https://source.unsplash.com/538x610/?Norway",
    },
    {
      imgSrc: "https://source.unsplash.com/506x1057/?Malaysia",
    },
    {
      imgSrc: "https://source.unsplash.com/588x756/?Anguilla",
    },
    {
      imgSrc: "https://source.unsplash.com/468x1047/?Senegal",
    },
    {
      imgSrc: "https://source.unsplash.com/574x498/?Zaire",
    },
    {
      imgSrc: "https://source.unsplash.com/594x635/?Ireland",
    },
    {
      imgSrc: "https://source.unsplash.com/448x759/?Nauru",
    },
    {
      imgSrc: "https://source.unsplash.com/540x619/?Mayotte",
    },
    {
      imgSrc: "https://source.unsplash.com/552x438/?Syria",
    },
    {
      imgSrc: "https://source.unsplash.com/563x759/?Ghana",
    },
    {
      imgSrc: "https://source.unsplash.com/569x1171/?Austria",
    },
    {
      imgSrc: "https://source.unsplash.com/581x657/?Macau",
    },
    {
      imgSrc: "https://source.unsplash.com/539x1013/?Mozambique",
    },
    {
      imgSrc: "https://source.unsplash.com/581x477/?Liechtenstein",
    },
    {
      imgSrc:
        "https://source.unsplash.com/495x589/?Saint Vincent and The Grenadines",
    },
    {
      imgSrc: "https://source.unsplash.com/579x680/?Brazil",
    },
    {
      imgSrc: "https://source.unsplash.com/467x642/?Turks and Caicos Islands",
    },
    {
      imgSrc: "https://source.unsplash.com/496x1186/?Italy",
    },
    {
      imgSrc: "https://source.unsplash.com/416x844/?Reunion",
    },
    {
      imgSrc: "https://source.unsplash.com/442x569/?Sierra Leone",
    },
    {
      imgSrc: "https://source.unsplash.com/517x1084/?Northern Mariana Islands",
    },
    {
      imgSrc: "https://source.unsplash.com/431x1164/?Belgium",
    },
    {
      imgSrc: "https://source.unsplash.com/541x649/?Netherlands",
    },
    {
      imgSrc: "https://source.unsplash.com/491x902/?Korea (South)",
    },
    {
      imgSrc: "https://source.unsplash.com/534x778/?Guinea",
    },
    {
      imgSrc: "https://source.unsplash.com/528x933/?Tunisia",
    },
    {
      imgSrc: "https://source.unsplash.com/441x609/?Tonga",
    },
    {
      imgSrc: "https://source.unsplash.com/469x1060/?Equatorial Guinea",
    },
    {
      imgSrc:
        "https://source.unsplash.com/588x794/?S. Georgia and S. Sandwich Isls.",
    },
    {
      imgSrc: "https://source.unsplash.com/536x1103/?Algeria",
    },
    {
      imgSrc: "https://source.unsplash.com/541x821/?Israel",
    },
    {
      imgSrc: "https://source.unsplash.com/414x541/?Bulgaria",
    },
    {
      imgSrc: "https://source.unsplash.com/477x879/?Turkmenistan",
    },
    {
      imgSrc: "https://source.unsplash.com/450x777/?Croatia (Hrvatska)",
    },
    {
      imgSrc: "https://source.unsplash.com/528x978/?Cook Islands",
    },
    {
      imgSrc: "https://source.unsplash.com/521x686/?Solomon Islands",
    },
    {
      imgSrc: "https://source.unsplash.com/550x432/?Bosnia and Herzegovina",
    },
    {
      imgSrc: "https://source.unsplash.com/540x631/?Tanzania",
    },
    {
      imgSrc: "https://source.unsplash.com/594x443/?Chad",
    },
  ];
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
  constructor(private titleService: Title) { }

  public get images(): IMasonryGalleryImage[] {
    return this.masonryImages.map(m => <IMasonryGalleryImage>{
      imageUrl: m.imgSrc
    });
  }
  filteredByCategorySelected(categoryIdSelected: string) {

    let imagesFilteredByCategory = [];

    if (categoryIdSelected === "ALL") {
      this.masonryImages = this.dummyPictures.slice(0, this.limit);
      return;
    }
    this.dummyPictures.forEach((element) => {
      console.log(element);

      if (element.tag === categoryIdSelected) {
        imagesFilteredByCategory.push(element);
      }
    });
    this.masonryImages = imagesFilteredByCategory.slice(0, this.limit);
  }

  ngOnInit(): void {
    this.masonryImages = this.dummyPictures.slice(0, this.limit);
    this.titleService.setTitle(this.title);
  }

  showMoreImages() {
    this.limit += 15;
    this.masonryImages = this.dummyPictures.slice(0, this.limit);
  }
}
