import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  homeForm!: FormGroup;
  persone:any;

  constructor(private firebase:FirebaseService){}

  onSubmit(){
    console.log(this.homeForm)
    this.firebase.insertPersona(this.firebase.url, {nome: this.homeForm.value.nome, cognome: this.homeForm.value.cognome, email: this.homeForm.value.email, colore: this.homeForm.value.colore}).subscribe(data=>{console.log(data)})

    this.homeForm.reset()

    
  }
  ngOnInit(): void {
    this.homeForm = new FormGroup({
      nome: new FormControl(null, Validators.required), 
      cognome: new FormControl(null, [Validators.required]), 
      email: new FormControl(null, [Validators.required, Validators.email]), 
      colore: new FormControl(null, [Validators.required]), 
    })
  }

}