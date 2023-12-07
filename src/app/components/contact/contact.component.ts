import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { FirebaseService } from 'src/app/services/firebase.service';
import { PeopleService } from 'src/app/services/people.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit{
  id!:number;
  persone:any;
  persona:any;


  constructor(private firebase: FirebaseService, private peopleService:PeopleService, private route:ActivatedRoute){}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params:ParamMap)=>{
      this.id = +params.get('id')!
      // this.persona = this.peopleService.getPerson(this.id)

      this.firebase.getPersone(this.firebase.url).subscribe((data: any)=>{
        this.persone = Object.keys(data).map((key)=>{return data[key]})

        this.persona = this.persone[this.id]
      })
      
    })
  }
}
