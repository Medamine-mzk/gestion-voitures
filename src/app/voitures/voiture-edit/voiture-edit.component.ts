import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Voiture } from 'src/app/model/voiture.model';
import { VoituresService } from 'src/app/voitures.service';

@Component({
  selector: 'app-voiture-edit',
  templateUrl: './voiture-edit.component.html',
  styleUrls: ['./voiture-edit.component.css']
})
export class VoitureEditComponent implements OnInit {
  id! : any;
  editMode?: boolean;

  couleurs=['Bleu','Rouge', 'Vert', 'Blanche', 'Noire'];
  voiture!: Voiture;


  constructor(private voitureService : VoituresService,
              private router : Router,
              private route : ActivatedRoute){ }

  ngOnInit(): void {
     this.route.data.subscribe(
      (data : any)=>{
        if (data['Voiture']){
          this.voiture= data['Voiture'];
          this.id=data['Voiture']['id'];
          this.editMode=true;
          if(this.voiture==null){
            
          }
        }
        else{
          this.voiture={};
          this.editMode=false;
        }
        
      }
    )
  }

  onAjoutVoiture(formulaire: NgForm){
    if(this.editMode){
      this.voitureService.updateVoiture(this.voiture).subscribe(
        v => this.router.navigate(['voitures',v.id])
      );
    }else{
      this.voitureService.postVoiture(this.voiture).subscribe(
        v => {
          this.voiture={};
          formulaire.reset()
        }
      );
    }
    window.location.reload();

  }

  onCancel(){
    this.router.navigate(["../"],{relativeTo: this.route});
  }

}
