import { Injectable } from '@angular/core';
import { Observable, Subject, tap } from 'rxjs';
import { Voiture } from './model/voiture.model';
import { HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class VoituresService {
  private baseURL="http://localhost:8000/api/voitures";

  //voitureChanged = new Subject<Voiture[]>();

  constructor(private http: HttpClient) { }

  /**Get voitures */
  getVoitures():Observable<any>{
    return this.http.get<Voiture[]>(this.baseURL);
  }

  getVoituresUPDATED():Observable<any>{
    return  this.http.get(this.baseURL);
  }




  /**Get voiture */
  getVoiture(id:number):Observable<any>{
    const url= this.baseURL+ '/'+ id;
    return this.http.get<Voiture>(url);
  }

  /**Post voiture */
  postVoiture(voiture: Voiture): Observable<Voiture>{
    return this.http.post<Voiture>(this.baseURL, voiture)
    //.pipe(tap(v => this.notifyVoitureChanged())    )
 }

  /**PUT: mettre à jour la voiture dans le serveur */
  updateVoiture(voiture: Voiture): Observable<Voiture>{
     return this.http.put<Voiture>(this.baseURL+'/'+voiture.id, voiture)
     //.pipe( tap(v => this.notifyVoitureChanged()));
  }

  deleteVoiture(voiture: Voiture):Observable<String>{
    return this.http.delete<String>(this.baseURL+'/'+voiture.id)
    //.pipe( tap(v => this.notifyVoitureChanged()));
  }

  // notifyVoitureChanged(){
  //   this.getVoitures().subscribe(
  //     voitures => this.voitureChanged.next(voitures)
  //   )
  // }
}