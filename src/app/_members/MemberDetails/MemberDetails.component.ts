import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, FormArray, NgForm } from '@angular/forms'
import { ServiceService } from 'src/app/SERVICE/service.service'; // service link here
import { isNullOrUndefined, isNull } from 'util';
import { isDefined } from '@angular/compiler/src/util';
import { Key } from 'protractor';
import { Router } from '@angular/router';
import swal from 'sweetalert2';
import { Subscriber } from 'rxjs';
declare var $: any;


@Component({
  selector: 'app-MemberDetails',
  templateUrl: './MemberDetails.component.html',
  styleUrls: ['./MemberDetails.component.css']
})
export class MemberDetailsComponent implements OnInit {

  addForm: FormGroup;
  ID; i: number
  singleMember;
  rows: FormArray;
  itemForm: FormGroup;
  response;
  society = false;
  beneficiaries;
  selectedrow;
  firstName; lastName;
  idnumber; email;
  housenumber; streetname
  suburb; province
  contact; membershipID
  policystatus; color;
  createdby; noBeneficiary = false
  BenefitName; BenefitSurname = []; BenefitIdNumber;
  editTextBox = false;
  date
  creator
  payments
  Nopayment = false;

  constructor(private fb: FormBuilder, private _service: ServiceService) {

    this.addForm = this.fb.group({
      items: [null, Validators.required],
      items_value: ['no', Validators.required]
    });

    this.rows = this.fb.array([]);




  }

  ngOnInit() {

    if (!isNullOrUndefined(sessionStorage.getItem('greenlinks'))) {
      this.society = true
    }



    if (localStorage.getItem('id') != null) {
      this.ID = JSON.parse(localStorage.getItem('id'));


      this._service.getSingleMember(this.ID)
        .subscribe(res => {

          this.singleMember = res
          this.firstName = this.singleMember.response[0].name
          this.lastName = this.singleMember.response[0].surname
          this.idnumber = this.singleMember.response[0].idnumber
          this.email = this.singleMember.response[0].email
          this.housenumber = this.singleMember.response[0].housenumber
          this.streetname = this.singleMember.response[0].streetname
          this.suburb = this.singleMember.response[0].suburb
          this.province = this.singleMember.response[0].province
          this.contact = this.singleMember.response[0].contactnumber
          this.membershipID = this.singleMember.response[0].membershipnumber
          this.policystatus = this.singleMember.response[0].policystatus
          this.date = this.singleMember.response[0].date
          this.createdby = this.singleMember.response[0].createdby
          this.noBeneficiary = false



          this._service.getMemberBeneficiary(this.membershipID)
            .subscribe(res => {
              this.response = res;
              this.beneficiaries = this.response.response
              console.log(res)


              for (this.i = 0; this.i < this.beneficiaries.length; this.i++) {
                this.BenefitSurname.push(this.beneficiaries[this.i].surname)
              }



              if (this.beneficiaries.length == 0) {
                this.noBeneficiary = true
              } else {
                this.noBeneficiary = false
              }

              this._service.payments(this.membershipID)
                .subscribe(res => {
                  this.response = res
                  
                  this.payments = this.response.response
                  if(this.payments.length > 0){
                    this.Nopayment = false
                    console.log('Number of payments: ' + this.payments.length)
                    console.log(this.payments)
                  } else {
                    this.Nopayment = true
                  }
                }, err => console.log(err))

              console.log(this.beneficiaries)
            },
              err => console.log(err))


          if (this.policystatus = 'Active') {
            this.color = 'text-success'
          } else {
            this.color = 'text-danger'
          }


        },

          err => console.log(err))
    } else {
      return null;
    }

  }



  /* editMember(index, id) {
     this.selectedrow = index;
 
     swal({
       title: 'Edit BeneficiaRY',
       html: '<div class="form-group">' +
         '<input id="input-field" type="text" class="form-control" />' +
         '</div>',
       showCancelButton: true,
       confirmButtonClass: 'btn btn-success',
       cancelButtonClass: 'btn btn-danger',
       buttonsStyling: false
     }).then(function (result) {
       swal({
         type: 'success',
         html: 'You entered: <strong>' +
           $('#input-field').val() +
           '</strong>',
         confirmButtonClass: 'btn btn-success',
         buttonsStyling: false
 
       })
     }).catch(swal.noop)
   }
   // {"name":"YEBO","surname":"ertyuio","idnumber":"23456789"}
   // Delete a member              "idBeneficiaries": 69,
           "membershipnumber": "2019163630", 
           */



  deleteBeneficiary(index, id, NAME, SURNAME) {
    this.selectedrow = index;

    swal({
      title: 'Delete ' + NAME + ' ' + SURNAME,
      text: "As a Beneficiary",
      type: 'warning',
      showCancelButton: true,
      confirmButtonClass: 'btn btn-success',
      cancelButtonClass: 'btn btn-danger',
      cancelButtonText: 'No, Do not Delete',
      confirmButtonText: 'Yes, Delete',
      buttonsStyling: false
    }).then((result) => {
      if (result.value) {
        this._service.removeBeneficiary(id)
          .subscribe(res => {
            console.log(res)
          }, err => console.log(err))
        swal(
          {
            title: 'Deleted',
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

  /* Edit a member
  editMember(index, id) {
    this.selectedrow = index;
    console.log('Member ID: ' + id);
    localStorage.setItem('id', JSON.stringify(id));
    this._router.navigate(['/members/editmember']);
  }*/
  editbeneficiary(index, id, NAME, SURNAME, IDNUMBER) {
    this.selectedrow = index;



    swal({
      title: 'Edit Beneficiary',
      html:
        '<div class="row">' +
       ' <form name="sweet">'+
        '<div class="col-10">' +

        ' <div class="row">' +
        ' <label class=" col-4 col-form-label">Name: </label>' +
        '<div class="col-8">' +
        '<mat-form-field class="example-full-width">' +
        '<input matInput type="text" id="Name" placeholder="' + NAME + '" class="form-control" />' +
        '</mat-form-field>' +
        '</div>' +
        '</div>' +

        '<div class="row">' +
        ' <label class=" col-4 col-form-label">Surname: </label>' +
        '<div class="col-8">' +
        '<mat-form-field class="example-full-width">' +
        '<input matInput type="text" id="Surname" placeholder="' + SURNAME + '" class="form-control" />' +
        '</mat-form-field>' +
        '</div>' +
        '</div>' +

        '<div class="row">' +
        ' <label class=" col-4 col-form-label">ID number: </label>' +
        '<div class="col-8">' +
        '<input matInput type="number" name="idnumber" minLength id="IDNumber" placeholder="' + IDNUMBER + '" class="form-control" />' +
        '</div>' +
        '</div>' +
        '</form>'+
        '</div>',
      showCancelButton: true,
      confirmButtonClass: 'btn btn-success',
      cancelButtonClass: 'btn btn-danger',
      buttonsStyling: false
    }).then((result) => {
      if (result.value) {

        // NEW BENEFICIARY NAME
        if ($('#Name').val() == '' || isNullOrUndefined($('#Name').val())) {
          this.BenefitName = NAME
        } else {
          this.BenefitName = $('#Name').val()
        }

        // NEW BENEFICIARY SURNAME
        if ($('#Surname').val() == '' || isNullOrUndefined($('#Surname').val())) {
          this.BenefitSurname = SURNAME
        } else {
          this.BenefitSurname = $('#Surname').val()
        }

        // NEW BENEFICIARY ID NUMBER
        if ($('#IDNumber').val() == '' || isNullOrUndefined($('#IDNumber').val())) {
          this.BenefitIdNumber = IDNUMBER
        } else {
          this.BenefitIdNumber = $('#IDNumber').val()
        }


        if (this.BenefitIdNumber.length < 13) {
          console.log('invalid')
          
          swal({
            title: "Invalid ID Number!",
            text: "An ID Number must have 13 digits",
            timer: 1000,
            showConfirmButton: false
        }).catch(swal.noop)

        } else {
          console.log('valid')

          this._service.updateBeneficiary(id, { 'name': this.BenefitName, 'surname': this.BenefitSurname, 'idnumber': this.BenefitIdNumber })
            .subscribe(res => {
              console.log(res)


              swal(
                {
                  title: 'Updates Succesfully Saved',
                  type: 'success',
                  confirmButtonClass: "btn btn-success",
                  buttonsStyling: false

                }).then((result) => window.location.reload())
            })

        }


      }
    })


  }
}


/*
PAYMENTS
            "idlastPaid": 114,
            "date": "2019-5-31 16:25:30",   Jan 27, 2015
            "amount": "0",
            "membershipnumber": "2019162530"


January 29, 2015 at 16:58


"response": [
        {
            "idBeneficiaries": 77,
            "membershipnumber": "2019163142",
            "name": "Thato",
            "surname": "iuurtfy",
            "idnumber": "123123123123123",
            "date": "2019-5-31 16:31:42"
        }
    ]

.



*/
