import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  persone:any;
  persona:any

  url = 'https://corso-angular-cdb68-default-rtdb.europe-west1.firebasedatabase.app/persone.json';

  constructor(private http: HttpClient) { }

  insertPersona(url:string, body:Object){
    return this.http.post(url, body);
  }

  getPersone(url:string){
    this.persone = this.http.get(url)
    return this.http.get(url)
  }

  getPersona(url:string, index:number){
    this.persone = this.http.get(url);
    this.persona = this.persone[index]
    return this.persona;
  }

}
