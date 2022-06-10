import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-deleteconfirm',
  templateUrl: './deleteconfirm.component.html',
  styleUrls: ['./deleteconfirm.component.css']
})
export class DeleteconfirmComponent implements OnInit {
  @Input() item:any
  @Output() onCancel=new EventEmitter()
  constructor() {     
  }

  ngOnInit(): void {
  }
  cancel(){
    this.onCancel.emit()
  }

}
