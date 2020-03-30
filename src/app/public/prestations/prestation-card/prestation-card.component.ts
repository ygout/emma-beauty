import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Prestation } from 'src/app/shared/models/prestation';

@Component({
  selector: 'app-prestation-card',
  templateUrl: './prestation-card.component.html',
  styleUrls: ['./prestation-card.component.scss']
})
export class PrestationCardComponent implements OnInit {

  @Input() prestation: Prestation;
  @Input() isOpen: boolean = false;
  @Output() toggle: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }
  ngOnInit(): void {
  }

  closeOrOpen() {
    this.isOpen = !this.isOpen;
    this.toggle.emit(this.isOpen);
  }
}
