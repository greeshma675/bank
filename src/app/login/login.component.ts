import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  acno=""
  password=""
  aim="Perfect Banking Partner"
  accno="Enter your username"
 
  // login(acno:any,pwd:any){
  //   var accno=acno.value
  //   var password=pwd.value
  //   var db=this.db
  //   if(accno in db){
  //       if(password==db[accno]["password"]){
  //           alert("Login successfull");
            
  //       }else{
  //        alert("Incorrect password");
          
  //       }
  //   }else{
  //     alert("User not existing");
      
  //   }
  // }

  login(){
    var accno=this.acno
    var password=this.password
    const result=this.data.login(accno,password)
    if(result){
            alert("Login successfull");
            this.router.navigateByUrl("dashBoard")
    }
  }
  acnoChange(event:any){
    this.acno=event.target.value
    console.log(this.acno);
    
  }
  passChange(event:any){
    this.password=event.target.value
    console.log(this.password);
    
  }
  constructor(private router:Router,private data:DataService) { }

  ngOnInit(): void {
  }

}
