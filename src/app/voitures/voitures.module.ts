import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { VoituresComponent } from './voitures.component';
import { VoitureListComponent } from './voiture-list/voiture-list.component';
import { VoitureItemComponent } from './voiture-list/voiture-item/voiture-item.component';
import { VoitureStartComponent } from './voiture-start/voiture-start.component';
import { VoitureDetailComponent } from './voiture-detail/voiture-detail.component';
import { VoitureEditComponent } from './voiture-edit/voiture-edit.component';
import { VoituresRoutingModule } from './voitures-routing.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    VoituresComponent,
    VoitureListComponent,
    VoitureItemComponent,
    VoitureStartComponent,
    VoitureDetailComponent,
    VoitureEditComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    VoituresRoutingModule,
    FormsModule
  ]
})
export class VoituresModule { }
