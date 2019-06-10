import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ViewPayments',
  templateUrl: './ViewPayments.component.html',
  styleUrls: ['./ViewPayments.component.css']
})
export class ViewPaymentsComponent implements OnInit {

  toNULL = false
  fromNULL = false
  table = false

  fromDate
  toDate
  selectedClaim

  constructor() { }

  ngOnInit() {

    this.toDate = document.querySelector('#toDate')
    this.fromDate = document.querySelector('#fromDate')

  }

  fromEnable() {
    this.fromNULL = false
  }

  toEnable() {
    this.toNULL = false
  }

  searchClaim() {


    if (this.toDate.value == '') {
      this.toNULL = true
    }

    if (this.fromDate.value == '') {
      this.fromNULL = true
    }

    if(!this.fromNULL && !this.toNULL) {
      this.table = true
    } else {
      this.table = false
    }

  }


}
