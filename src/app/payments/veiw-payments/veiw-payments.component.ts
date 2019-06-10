import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/SERVICE/service.service'; // service link here
import swal from 'sweetalert2';
import { isNullOrUndefined } from 'util';
declare var $: any;
;

declare interface DataTable {
  headerRow: string[];
  footerRow: string[];
  dataRows: string[][];
}

@Component({
  selector: 'app-veiw-payments',
  templateUrl: './veiw-payments.component.html',
  styleUrls: ['./veiw-payments.component.css']
})
export class VeiwPaymentsComponent implements OnInit {
  public dataTable: DataTable;
  response;
  members;
  selectedrow;
  selectedSearchType
  searchText = 'ID Number';
  isEmpty = false
  searchResult = false;
  notFound = false;
  invalidID = false;
  searchInput

  constructor(private _service: ServiceService, private _router: Router) {

  }

  Types = [
    { id: 1, value: 'Membership Number', viewValue: 'Membership Number' },
    { id: 2, value: 'ID Number', viewValue: 'ID Number' },
    { id: 3, value: 'Surname', viewValue: 'Surname' }
  ];

  ngOnInit() {

    sessionStorage.clear()
  }
  click(index, id) {
  }

  //Search member
  searchMember() {

    this.isEmpty = false
    this.searchResult = false
    this.notFound = false

    this.searchInput = document.querySelector('#searchBox')

    console.log(this.selectedSearchType)
    console.log(this.searchInput.value)


    if (this.searchInput.value == '' || isNullOrUndefined(this.searchInput.value)) {
      this.searchResult = false
      this.notFound = false
      this.isEmpty = true;
    } else {
      this.isEmpty = false
      this.searchResult = false
      this.notFound = false

      if (this.selectedSearchType == 'Membership Number') {

        this._service.searchMemberByMembershipNumber(this.searchInput.value)
          .subscribe(res => {
            this.response = res

            console.log(this.members)

            if (this.response.response.length > 0  ) {
              console.log('Search By Membership Number')
              this.notFound = false
              this.searchResult = true
            } else {
              console.log('NO MEMBERS FOUND')
              this.searchResult = false
              this.notFound = true
            }

          },
            err => {
              console.log(err)
              console.log(this.response.error)
            }
          )

      } else
        if (this.selectedSearchType == 'Surname') {

          this._service.searchMemberBySurname(this.searchInput.value)
            .subscribe(res => {
              this.response = res

              if (this.response.response.length > 0) {
                console.log('Search By Surname')
                this.notFound = false
                this.searchResult = true
              } else {
                console.log('NO MEMBERS FOUND')
                this.searchResult = false
                this.notFound = true
              }

            },
              err => console.log(err)
            )

        } else
          if (this.searchInput.value.length == 13 || this.selectedSearchType == 'ID Number') {
            this._service.searchMemberByIdNumber(this.searchInput.value)
              .subscribe(res => {
                this.response = res

                console.log(this.members)

                if (this.response.response.length > 0) {
                  console.log('Search By ID Number')
                  this.notFound = false
                  this.searchResult = true
                } else {
                  console.log('NO MEMBERS FOUND')
                  this.searchResult = false
                  this.notFound = true
                }

              },
                err => console.log(err)
              )

          } else {
            this.invalidID = true;
          }

    }

  }

  selectSearchType() {
    this.searchText = this.selectedSearchType
  }

  changeEmpty() {
    this.isEmpty = false
    this.invalidID = false
  }


  // Edit a member
  editMember(index, id) {
    this.selectedrow = index;
    console.log('Member ID: ' + id);
    localStorage.setItem('id', JSON.stringify(id));
    this._router.navigate(['/members/editmember']);
  }

  // View member details
  viewMember(index, id) {
    this.selectedrow = index;
    console.log('Member ID: ' + id);
    localStorage.setItem('id', JSON.stringify(id));
    this._router.navigate(['/members/viewmemberdetails']);
  }

  // Delete a member
  deleteMember(index, id) {
    this.selectedrow = index;
    console.log('Member ID: ' + id);
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



}






