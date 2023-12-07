import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FirebaseService } from 'src/app/services/firebase.service';
import { PeopleService } from 'src/app/services/people.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit{
  persone:any;
  isProfile!: boolean;

  constructor(private peopleService: PeopleService, private route:ActivatedRoute, private firebase:FirebaseService){}

  ngOnInit(): void {
    // this.persone = this.peopleService.getPeople()
    this.firebase.getPersone(this.firebase.url).subscribe((data: any)=>{
      this.persone = Object.keys(data).map((key)=>{return data[key]})
    })
  }

}
