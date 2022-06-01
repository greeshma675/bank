import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  acno=""
  password=""
  amount=""
  wacno=""
  wpassword=""
  wamount=""
  deposit(){
    var acno=this.acno
    var password=this.password
    var amount=this.amount
    const result=this.ds.deposit(acno,password,amount)
    if(result)
    alert(amount+" deposited to your account. Balance ="+result)
  }
  withdraw(){
    var wacno=this.wacno
    var wpassword=this.wpassword
    var wamount=this.wamount
    const result=this.ds.withdraw(wacno,wpassword,wamount)
    if(result)
    alert(wamount+" debited from your account. Balance ="+result)
  }
  constructor(private ds:DataService) { }

  ngOnInit(): void {
  }

}
