import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {
  transaction:any
  acno=JSON.parse(localStorage.getItem("currentAcno")||'')    
  constructor(private ds:DataService) { 
    // this.transaction=this.ds.getTransaction(this.acno)
    // console.log(this.transaction);
    this.ds.getTransaction(this.acno).subscribe((result:any)=>{
      if(result){
        this.transaction=result.transaction
        // alert(result.message)
      }
    },result=>alert(result.error.message))
    
  }

  ngOnInit(): void {
  }

}
