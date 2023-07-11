import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { switchMap } from 'rxjs';
import { Voiture } from 'src/app/model/voiture.model';
import { VoituresService } from 'src/app/voitures.service';

@Component({
  selector: 'app-voiture-detail',
  templateUrl: './voiture-detail.component.html',
  styleUrls: ['./voiture-detail.component.css']
})
export class VoitureDetailComponent implements OnInit{
  voiture! : Voiture;

  constructor(private voitureService: VoituresService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    console.log("voiture detail")
     this.route.params.pipe(
      switchMap((params:Params) =>this.voitureService.getVoiture(params['id']))
    )
    .subscribe(v=>this.voiture=v); 

    // this.route.data.subscribe(
    //   (data)=>{this.voiture=data;
    //   console.log("++++" + data);}
    // );

  }
  onSupprimer(){
    console.log(this.voiture.id);
    this.voitureService.deleteVoiture(this.voiture).subscribe(
      () => this.router.navigate(['../'],{relativeTo: this.route})
    )
  }

  onEditVoiture(id:number){
    this.router.navigate(['../edit',id],{relativeTo:this.route});
  }


}
