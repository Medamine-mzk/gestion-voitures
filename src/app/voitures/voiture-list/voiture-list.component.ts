import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Voiture } from 'src/app/model/voiture.model';
import { VoituresService } from 'src/app/voitures.service';

@Component({
  selector: 'app-voiture-list',
  templateUrl: './voiture-list.component.html',
  styleUrls: ['./voiture-list.component.css']
})
export class VoitureListComponent implements OnInit {

  voitures! : Voiture[];
  voituresChangeSubscription! : Subscription;

  constructor(private voitureService : VoituresService,
              private router: Router,
              private route: ActivatedRoute){}
  
  ngOnInit(): void {
    // console.log("oninit");
    // this.voituresChangeSubscription = this.voitureService.voitureChanged.subscribe(
    //   (voitures :Voiture[]) => {
    //     console.log("subsc");
    //     this.voitures=voitures;
    //   }
    // );
    this.voitureService.getVoitures().subscribe((v)=>{
      this.voitures=v['hydra:member'];
      console.log("list cars : \n"+v);
    }); 


  }
  onNewVoiture(){
    this.router.navigate(['new'], {relativeTo: this.route});
  }


  ngOnDestroy(){
    this.voituresChangeSubscription.unsubscribe();
  }
  
}
