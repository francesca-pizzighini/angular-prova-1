import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  persone = [
    {nome: 'Mario', cognome: 'Rossi', isOnline: true, color: 'red'},
    {nome: 'Luigi', cognome: 'Verdi', isOnline: false, color: 'green'},
    {nome: 'Peach', cognome: 'Rosi', isOnline: true, color: 'pink'},
    {nome: 'Toad', cognome: 'Gialli', isOnline: false, color: 'yellow'},
    {nome: 'Bowser', cognome: 'Marroni', isOnline: false, color: 'brown'},
  ]
  constructor() { }

  getPeople(){
    return this.persone
  }

  getPerson(index:number){
    return this.persone[index]
  }
}
