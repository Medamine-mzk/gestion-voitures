import { ResolveFn } from '@angular/router';
import { Voiture } from '../model/voiture.model';
import { VoituresService } from '../voitures.service';
import { inject } from '@angular/core';
import { EMPTY } from 'rxjs';

export const voitureResolver: ResolveFn<any> = (route, state) => {
  let id=route.paramMap.get('id');
  
  if(id!=null){
    
    return inject(VoituresService).getVoiture(+id);
  }
  else{
    return EMPTY;
  }
};

