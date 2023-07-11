import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { VoitureDetailComponent } from './voiture-detail/voiture-detail.component';
import { VoitureEditComponent } from './voiture-edit/voiture-edit.component';
import { VoitureStartComponent } from './voiture-start/voiture-start.component';
import { VoituresComponent } from './voitures.component';
import { voitureResolver } from './voiture.resolver';
import { authGuard } from '../auth/auth.guard';

const VoituresRoutes: Routes = [
  {
    path:'voitures',
    component:VoituresComponent,
    canActivate: [authGuard],
    children: [
      {path:'',component:VoitureStartComponent},
      {path:'new',component:VoitureEditComponent , canActivate: [authGuard]},
      {
        path:':id',
        component:VoitureDetailComponent,
        resolve : { Voiture : voitureResolver}
      },
      {
        path:'edit/:id',
        component:VoitureEditComponent, canActivate: [authGuard],
        resolve : { Voiture : voitureResolver}
      }
    ]
  },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(VoituresRoutes)
  ],
  exports: [
    [ RouterModule ]
  ]
})
export class VoituresRoutingModule { }
