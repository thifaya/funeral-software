import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/SERVICE/service.service'; // service link here
import { isNullOrUndefined, isNull } from 'util';
import { isDefined } from '@angular/compiler/src/util';
import { Key } from 'protractor';

@Component({
  selector: 'app-EditMember',
  templateUrl: './EditMember.component.html',
  styleUrls: ['./EditMember.component.css']
})
export class EditMemberComponent implements OnInit {

  ID;
  singleMember;
  response;

  plc;
  val;
  Splc;
  Sval;
  nm;
  Snm;
  test;
  test1;

  testAll : boolean;
  allData = {}; anyData = [{"name":"","surname":""}]
  fname; fname_val
  lname; lname_val
  email;
  idnumber; id_result
  contact;
  street;
  province;
  house;
  suburb;
  society: boolean = false;
  societies

  constructor(private _service: ServiceService) { }

  ngOnInit() {

    this._service.getSociety()
    .subscribe(res => {
        this.response = res
        this.societies = this.response.response
        console.log(this.societies)
    },
        err => console.log(err)
    )

    if (!isNullOrUndefined(sessionStorage.getItem('greenlinks') )) {
      this.society = true
    } 

    if (localStorage.getItem('id') != null) {
      this.ID = JSON.parse(localStorage.getItem('id'));

      this._service.getSingleMember(this.ID)
        .subscribe(res => {
          this.response = res
          this.singleMember = this.response.response
          console.log(this.singleMember);
        },

          err => console.log(err))
    } else {
      return null;
    }
  }

  XupdateMember() {
    this.fname = document.querySelector('#name');
    this.lname = document.querySelector('#surname');
    this.idnumber = document.querySelector('#idnumber');

    // UPDATE ALL FIELDS
    if (this.fname.value.length > 0 && this.lname.value.length > 0 && this.idnumber.value.length > 0) {
      if (this.fname.value.length == ' ' || this.lname.value.length == ' ' || this.idnumber.value.length == ' ') {
        console.log('DATA is null')
      } else { // ALL DATA NOT NULL

        this.allData = { "surname": this.lname.value, "IDNumber": this.idnumber.value, "name": this.fname.value }

        console.log('All data: ' + this.allData);
      }
      this._service.updateMember(this.ID, this.allData)
        .subscribe(res => console.log('=DONE=' + res),
          err => console.log(err))
    }

    // UPDATE ANY FIELD
    if (this.fname.value.length > 0 || this.lname.value.length > 0 || this.idnumber.value.length > 0) {
      // ONLY NAME
      if (this.fname.value == ' ' && this.fname.value.length >= 0) {
        console.log('name is null')
        delete this.anyData[0].name
      } else {
        this.fname_val = { "name": this.fname.value }
        this.anyData[0].name = this.fname.value;
        /*
        this.anyData.forEach((Key) => {
          Key["name"] = this.fname.value;
        }) */
      }
      // ONLY SURNAME
      if (this.lname.value == ' ' && this.lname.value.length >= 0) {
        console.log('surname is null')
        delete this.anyData[0].surname
      } else {
        this.lname_val = { "surname": this.lname.value }
        this.anyData[0].surname = this.lname.value;
        /*
        this.anyData.forEach((Key) => {
          Key["surname"] = this.lname.value;
        })*/
      }

      console.log('data: ' + this.anyData[0].name);
      console.log('data: ' + this.anyData[0].surname);
      
      this._service.updateMember(this.ID, this.anyData[0])
        .subscribe(res => console.log('=DONE=' + res),
          err => console.log(err))

    }
  }

  updateMember() {
    this.fname = document.querySelector('#name');
    this.lname = document.querySelector('#surname');
    this.idnumber = document.querySelector('#idnumber');
    this.plc = this.nm.placeholder;
    this.val = this.nm.value;
    this.Splc = this.Snm.placeholder;
    this.Sval = this.Snm.value;

    if (this.val.length == 0) {
      this.test = this.nm.placeholder;
    } else {
      this.test = this.nm.value;
    }

    if (this.Sval.length == 0) {
      this.test1 = this.Snm.placeholder;
    } else {
      this.test1 = this.Snm.value;
    }

    if (this.idnumber.value.length == 0) {
      this.id_result = this.idnumber.placeholder;
    } else {
      this.id_result = this.idnumber.value;
    }

    console.log('id number: ' + this.id_result);
    console.log('Surname: ' + this.test1);
    // localStorage.setItem('name', JSON.stringify(this.test))
    console.log('val: ' + this.idnumber.length);

  }

}
