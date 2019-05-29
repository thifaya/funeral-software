import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/SERVICE/service.service'; // service link here
import swal from 'sweetalert2';
declare var $: any;

declare interface DataTable {
  headerRow: string[];
  footerRow: string[];
  dataRows: string[][];
}



@Component({
  selector: 'app-ViewMembers',
  templateUrl: './ViewMembers.component.html',
  styleUrls: ['./ViewMembers.component.css']
})
export class ViewMembersComponent implements OnInit {

  public dataTable: DataTable;
  response;
  members;
  selectedrow;

  constructor(private _service: ServiceService, private _router: Router) { }

  ngOnInit() {

/*
    this._service.getMembers()
      .subscribe(res => {
        this.response = res
        this.members = this.response.response
        console.log(this.members)
      },
        err => console.log(err.message))
        */
       this._service.getMembers()
        .subscribe(
          res => {
            this.response = res
            this.members = this.response.response
            console.log(this.members)
          },
          err => console.log(err)
        )


        
      sessionStorage.clear()
  }
  click(index, id) {
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

  ngAfterViewInit() {
    $('#datatables').DataTable({
      "pagingType": "full_numbers",
      "lengthMenu": [
        [10, 25, 50, -1],
        [10, 25, 50, "All"]
      ],
      responsive: true,
      language: {
        search: "_INPUT_",
        searchPlaceholder: "Search records",
      }

    });

    const table = $('#datatables').DataTable();

    /* Edit record
    table.on('click', '.edit', function(e) {
      const $tr = $(this).closest('tr');
      const data = table.row($tr).data();
      alert('You press on Row: ' + data[0] + ' ' + data[1] + ' ' + data[2] + '\'s row.');
      e.preventDefault();
    });

    // Delete a record
    table.on('click', '.remove', function(e) {
      const $tr = $(this).closest('tr');
      table.row($tr).remove().draw();
      e.preventDefault();
    });
*/
    //Like record
    table.on('click', '.like', function (e) {
      alert('You clicked on Like button');
      e.preventDefault();
    });

    $('.card .material-datatables label').addClass('form-group');
  }

}
