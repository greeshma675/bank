import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  db:any={
    1000:{"acno":1000,"username":"anu","password":1000,"balance":5000},
    1001:{"acno":1001,"username":"binu","password":1001,"balance":3000}
  }
  constructor() {
   }
   login(acno:any,pswd:any){

    var db=this.db
    if(acno in db){
        if(pswd==db[acno]["password"]){
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
      db[acno]={acno,username,password,"balance":0}
      return true
    }
  }
  deposit(acno:any,pswd:any,amount:any){
    let db=this.db
    if(acno in db){
      if(pswd==db[acno]["password"]){
        let amnt=parseInt(amount)
        db[acno]["balance"]+=amnt
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
}
