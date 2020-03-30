import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Prestation } from 'src/app/shared/models/prestation';
import { Category } from 'src/app/shared/models/category';

@Component({
  selector: 'app-prestations',
  templateUrl: './prestations.component.html',
  styles: []
})
export class PrestationsComponent implements OnInit {

  title = "Mes Préstations";
  categories: Category[] = [
    {
      id: "category1",
      title: "MAQUILLAGE"
    },
    {
      id: "category2",
      title: "SOINS DU VISAGE"
    },
    {
      id: "category3",
      title: "SOINS DU CORPS"
    },
    {
      id: "category4",
      title: "MODELAGES"
    },
    {
      id: "category5",
      title: "ONGLERIE"
    },
    {
      id: "category6",
      title: "LE REGARD"
    }
  ]
  prestations: Prestation[] = [
    {
      id: "presation1",
      title: "FORFAIT « SUBLIME MARIÉE »",
      description: `Le forfait inclus:
      1 entretien physique ou téléphonique pour l’organisation des rdv et définir vos attentes
      1 essai maquillage
      Maquillage Jour J + pose de faux cils
      Autres possibilités de forfait personnalisable en fonction de vos besoins (prenez contact)`,
      price: 95,
      duration: 60,
      categoy: this.categories[0]
    },
    {
      id: "presation2",
      title: "MISE EN BEAUTÉ DU JOUR",
      description: `Suppléments faux-cils:
      0,50€ par pose de faux cils
      5€ pour 2f ranges à cils`,
      price: 25,
      duration: 60,
      categoy: this.categories[0]
    },
    {
      id: "presation3",
      title: "SOIN COUP D'ÉCLAT",
      description: `Un soin express pour booster la jeunesse du visage . Concentré en actifs anti-âge et en Vitamine C, il offre à votre peau une véritable cure d’énergie. Elle est revitalisée, votre teint est unifié et éclatant.  Il est adapté à tous les types de peau, même les plus fragiles.`,
      price: 35,
      duration: 60,
      categoy: this.categories[1]
    }
  ]

  groupByCategory: any = this.prestations.reduce((r, a) => {
    r[a.categoy.id] = [...r[a.categoy.id] || [], a];
    return r;
   }, {});

   categoriesToDisplay: Category[] = this.categories.filter((el) => {
    return Object.keys(this.groupByCategory).indexOf(el.id) >= 0;
   });
  constructor(private titleService: Title) { }

  ngOnInit(): void {
    this.titleService.setTitle(this.title);
  }

}
