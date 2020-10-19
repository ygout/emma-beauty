import { Prestation } from '@/core/models';
import { Component, ViewChildren, QueryList, AfterViewInit, Input } from '@angular/core';
import { PrestationCardComponent } from '../prestation-card/prestation-card.component';

@Component({
  selector: 'app-prestation-category',
  templateUrl: './prestation-category.component.html',
  styleUrls: ['./prestation-category.component.scss']
})
export class PrestationCategoryComponent implements AfterViewInit {

  @ViewChildren(PrestationCardComponent) prestationsCards: QueryList<PrestationCardComponent>
  @Input() title: string;
  @Input() presations: Prestation[];
  constructor() { }
  ngAfterViewInit() {
    // Loop through all panels
    this.prestationsCards.toArray().forEach((panel: PrestationCardComponent) => {
      // subscribe panel toggle event
      panel.toggle.subscribe((isOpen) => {
        // Open the panel
        if(isOpen)
          this.openPanel(panel);
      });
    });
  }
  /**
   * Open an accordion group
   * @param group   Group instance
   */
  openPanel(panel: PrestationCardComponent) {
    // close all panels
    this.prestationsCards.toArray().forEach(p => p.isOpen = false);
    // open the selected panel
    panel.isOpen = true;
  }
}
