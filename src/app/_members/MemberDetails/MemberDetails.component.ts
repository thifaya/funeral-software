import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, FormArray, NgForm } from '@angular/forms'
import { ServiceService } from 'src/app/SERVICE/service.service'; // service link here
import { isNullOrUndefined, isNull } from 'util';
import { isDefined } from '@angular/compiler/src/util';
import { Key } from 'protractor';
import { Router } from '@angular/router';
import swal from 'sweetalert2';
declare var $: any;


@Component({
  selector: 'app-MemberDetails',
  templateUrl: './MemberDetails.component.html',
  styleUrls: ['./MemberDetails.component.css']
})
export class MemberDetailsComponent implements OnInit {

  addForm: FormGroup;
  ID;
  singleMember;
  rows: FormArray;
  itemForm: FormGroup;
  response;
  society: boolean = false;
  beneficiaries;
  selectedrow

  constructor(private fb: FormBuilder, private _service: ServiceService) {

    this.addForm = this.fb.group({
      items: [null, Validators.required],
      items_value: ['no', Validators.required]
    });

    this.rows = this.fb.array([]);


  }

  ngOnInit() {

    if (!isNullOrUndefined(sessionStorage.getItem('greenlinks') )) {
      this.society = true
    } 

    if (localStorage.getItem('id') != null) {
      this.ID = JSON.parse(localStorage.getItem('id'));
      this._service.getBeneficiary()
        .subscribe(res => {
          this.response = res;
          this.beneficiaries = this.response.response

        },
        err => console.log(err))
/*
      this._service.getSingleMember(this.ID)
        .subscribe(res => {
          this.response = res
          this.singleMember = this.response.response
          console.log(this.singleMember);

           this._service.getBeneficiary()
        .subscribe(res => {
          this.response = res;
          this.beneficiaries = this.response.response

        },
        err => console.log(err))
        },

          err => console.log(err))*/
    } else {
      return null;
    }

  }
  editMember(index, id) {
    this.selectedrow = index;
  }

  // Delete a member
  deleteMember(index, id) {
    this.selectedrow = index;
    swal({
      title: 'Delete This Member',
      text: "Are you sure?",
      type: 'warning',
      showCancelButton: true,
      confirmButtonClass: 'btn btn-success',
      cancelButtonClass: 'btn btn-danger',
      cancelButtonText: 'No, Do not Delete',
      confirmButtonText: 'Yes, Delete',
      buttonsStyling: false
    }).then((result) => {
      if (result.value) {
        this._service.removeMember(id)
          .subscribe(res => {
            console.log(res)
          }, err => console.log(err))
        swal(
          {
            title: 'Member Deleted',
            //text: 'Member Deleted',
            type: 'success',
            confirmButtonClass: "btn btn-success",
            buttonsStyling: false

          }).then((result) => window.location.reload())
      }
    })
  }

  onAddRow() {
    this.rows.push(this.createItemFormGroup());
  }

  onRemoveRow(rowIndex: number) {
    this.rows.removeAt(rowIndex);
  }

  createItemFormGroup(): FormGroup {
    return this.fb.group({
      name: null,
      descriptions: null,
      qty: null
    });
  }

}
