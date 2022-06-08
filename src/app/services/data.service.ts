import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  currentUser:any
  currentAcno:any
  db:any={
    1000:{"acno":1000,"username":"anu","password":1000,"balance":5000,transaction:[]},
    1001:{"acno":1001,"username":"binu","password":1001,"balance":3000,transaction:[]}
  }
  constructor() {
    this.getDetails()
    // localStorage.clear()
   } 
   saveDetails(){
     if(this.db){
       localStorage.setItem("database",JSON.stringify(this.db))
     }
     if(this.currentUser){
       localStorage.setItem("currentUser",JSON.stringify(this.currentUser))
     }
     if(this.currentAcno){
      localStorage.setItem("currentAcno",JSON.stringify(this.currentAcno))
    }
   }
   getDetails(){
      if(localStorage.getItem("database")){
        this.db=JSON.parse(localStorage.getItem("database")||'')
      }
      if(localStorage.getItem("currentUser")){
        this.currentUser=JSON.parse(localStorage.getItem("currentUser")||'')
      }
      if(localStorage.getItem("currentAcno")){
        this.currentAcno=JSON.parse(localStorage.getItem("currentAcno")||'')
      }
   }

   login(acno:any,pswd:any){

    var db=this.db
    if(acno in db){
        if(pswd==db[acno]["password"]){
          this.currentUser=db[acno]["username"]
          this.currentAcno=acno
          this.saveDetails()
            return true
        }else{
         alert("Incorrect password");
          return false
        }
    }else{
      alert("User not existing");
      return false
      
    }
  }
  register(username:any,acno:any,password:any){
    let db=this.db
    if(acno in db){
      return false
    }else{
      db[acno]={acno,username,password,"balance":0,transaction:[]}
      this.saveDetails()
      return true
    }
  }
  deposit(acno:any,pswd:any,amount:any){
    let db=this.db
    if(acno in db){
      if(pswd==db[acno]["password"]){
        let amnt=parseInt(amount)
        db[acno]["balance"]+=amnt
        db[acno].transaction.push({
          type:"CREDIT",
          amount:amnt
        })
        this.saveDetails()
        return db[acno]["balance"]
      }else{
        alert("Incorrect password")
        return false
      }
    }else{
      alert("User does not exist")
      return false
    }
  }
  withdraw(acno:any,pswd:any,amount:any){
    let db=this.db
    if(acno in db){
      if(pswd==db[acno]["password"]){
        let amnt=parseInt(amount)
        if(db[acno]["balance"]>amnt){
        db[acno]["balance"]=db[acno]["balance"]-amnt
        db[acno].transaction.push({
          type:"DEBIT",
          amount:amnt
        })
        this.saveDetails()
        return db[acno]["balance"]}
        else{
          alert("Insufficient balance")
          return false
        }
      }else{
        alert("Incorrect password")
        return false
      }
    }else{
      alert("User does not exist")
      return false
    }
  }
  getTransaction(acno:any){
    return this.db[acno]["transaction"]
  }
}
