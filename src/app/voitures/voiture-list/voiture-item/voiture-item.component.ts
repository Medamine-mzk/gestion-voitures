import { Component, Input } from '@angular/core';
import { Voiture } from 'src/app/model/voiture.model';

@Component({
  selector: 'app-voiture-item',
  templateUrl: './voiture-item.component.html',
  styleUrls: ['./voiture-item.component.css']
})
export class VoitureItemComponent {
  @Input()
  voiture? : Voiture;
}
