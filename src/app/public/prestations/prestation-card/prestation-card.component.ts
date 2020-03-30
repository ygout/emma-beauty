import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-prestation-card',
  templateUrl: './prestation-card.component.html',
  styleUrls: ['./prestation-card.component.scss']
})
export class PrestationCardComponent implements OnInit {

  @Input() isOpen: boolean = false;
  /**
   * Emitted when user clicks on group titlebar
   * @type {EventEmitter<any>}
   */
  @Output() toggle: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }
  ngOnInit(): void {
  }

}
