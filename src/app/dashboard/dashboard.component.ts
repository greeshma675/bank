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
  ldate:any
  acno:any
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
    // const result=this.ds.deposit(acno,password,amount)
    // if(result)
    // alert(amount+" deposited to your account. Balance ="+result)
    this.ds.deposit(acno,password,amount).subscribe((result:any)=>{
      if(result){
        alert(result.message)
      }
    },result=>alert(result.error.message))
    }
    else{
      alert("Invalid form")
    }
  }
  withdraw(){
    var wacno=this.withdrawForm.value.wacno
    var wpassword=this.withdrawForm.value.wpassword
    var wamount=this.withdrawForm.value.wamount

    // const result=this.ds.withdraw(wacno,wpassword,wamount)
    // if(result)
    // alert(wamount+" debited from your account. Balance ="+result)
    if(this.withdrawForm.valid){
    this.ds.withdraw(wacno,wpassword,wamount).subscribe((result:any)=>{
      if(result){
        alert(result.message)
      }
    },result=>alert(result.error.message))

    }else{
      alert("Invalid form")
    }
    
  }
  constructor(private ds:DataService,private db:FormBuilder,private router:Router) {
    // this.user=ds.currentUser
        this.user=localStorage.getItem("currentUser")
    this.ldate=new Date()
   }
   logOut(){
     localStorage.removeItem("currentUser")
     localStorage.removeItem("currentAcno")
     localStorage.removeItem("token")
    this.router.navigateByUrl('')
   }
  ngOnInit(): void {
    if(!localStorage.getItem("token")){
      alert("Please login...!!!")
      this.router.navigateByUrl('')
    }
  }
  deleteAccount(){
    this.acno=JSON.parse(localStorage.getItem("currentAcno")||'')
  }
  cancel(){
    this.acno=""
  }
  onDelete(event:any){
    this.ds.deleteAcc(event).subscribe((result:any)=>{
      if(result){
        alert(result.message)
        this.logOut()
      }
    },result=>alert(result.error.message))
  }
}
