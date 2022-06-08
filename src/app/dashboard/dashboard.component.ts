import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  // acno=""
  // password=""
  // amount=""
  // wacno=""
  // wpassword=""
  // wamount=""
  user:any
  depositForm=this.db.group({
    acno:['',[Validators.required,Validators.pattern('[a-zA-Z0-9 ]*')]],
    password:['',[Validators.required,Validators.pattern('[a-zA-Z0-9 ]*')]],
    amount:['',[Validators.required,Validators.pattern('[0-9 ]*')]],
  })
  withdrawForm=this.db.group({
    wacno:['',[Validators.required,Validators.pattern('[a-zA-Z0-9 ]*')]],
    wpassword:['',[Validators.required,Validators.pattern('[a-zA-Z0-9 ]*')]],
    wamount:['',[Validators.required,Validators.pattern('[0-9 ]*')]]
  })
  deposit(){
    var acno=this.depositForm.value.acno
    var password=this.depositForm.value.password
    var amount=this.depositForm.value.amount
    if(this.depositForm.valid){
    const result=this.ds.deposit(acno,password,amount)
    if(result)
    alert(amount+" deposited to your account. Balance ="+result)
    }
    else{
      alert("Invalid form")
    }
  }
  withdraw(){
    var wacno=this.withdrawForm.value.wacno
    var wpassword=this.withdrawForm.value.wpassword
    
    var wamount=this.withdrawForm.value.wamount
    const result=this.ds.withdraw(wacno,wpassword,wamount)
    if(result)
    alert(wamount+" debited from your account. Balance ="+result)
    
  }
  constructor(private ds:DataService,private db:FormBuilder,private router:Router) {
    this.user=ds.currentUser

   }
   logOut(){
     localStorage.removeItem("currentUser")
     localStorage.removeItem("currentAcno")
    this.router.navigateByUrl('')
   }
  ngOnInit(): void {
    if(!localStorage.getItem("currentAcno")){
      alert("Please login...!!!")
      this.router.navigateByUrl('')
    }
  }

}
