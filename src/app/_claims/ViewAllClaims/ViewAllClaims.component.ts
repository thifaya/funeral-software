import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-ViewAllClaims',
  templateUrl: './ViewAllClaims.component.html',
  styleUrls: ['./ViewAllClaims.component.css']
})
export class ViewAllClaimsComponent implements OnInit {

  toNULL = false
  fromNULL = false
  table = false

  fromDate
  toDate
  selectedClaim

  constructor(private _router: Router) { }

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

    // View member details
    claimInfo(index) {
      this.selectedClaim = index;
     // console.log('Member ID: ' + id);
    //  localStorage.setItem('id', JSON.stringify(id));
      this._router.navigate(['/claims/claiminfo']);
    }

}
