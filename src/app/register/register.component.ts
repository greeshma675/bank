import { Component, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  username=""
  acno=""
  password=""

  registerForm=this.rf.group({
    username:'',
    password:'',
    acno:''
  })
  constructor(private db:DataService,private router:Router,private rf:FormBuilder) { }

  ngOnInit(): void {
  }
  register(){
    var username=this.username
    var acno=this.acno
    var password=this.password
    const result=this.db.register(username,acno,password)
    if(result){
      alert("Successfully registered")
      this.router.navigateByUrl('')
    }else{
      alert("Already existing user");
      
    }
  }
}
