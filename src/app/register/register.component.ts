import { Component, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  // username=""
  // acno=""
  // password=""

  registerForm=this.rf.group({
    username:['',[Validators.required,Validators.pattern('[a-zA-Z ]*')]],
    password:['',[Validators.required,Validators.pattern('[a-zA-Z0-9 ]*')]],
    acno:['',[Validators.required,Validators.pattern('[a-zA-Z0-9 ]*')]]
  })
  constructor(private db:DataService,private router:Router,private rf:FormBuilder) { }

  ngOnInit(): void {
  }
  register(){
    // var username=this.username
    var username=this.registerForm.value.username
    var acno=this.registerForm.value.acno
    var password=this.registerForm.value.password
    if(this.registerForm.valid){
    const result=this.db.register(username,acno,password)
    if(result){
      alert("Successfully registered")
      this.router.navigateByUrl('')
    }else{
      alert("Already existing user");
      
    }
  }
else{
  alert("Invalid form");
  
  } 
  }
}
