import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/SERVICE/service.service'; // service link here
import swal from 'sweetalert2';
declare var $: any;

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  user;

  constructor(private _router: Router, private _service: ServiceService) { }

  ngOnInit() {
  }

  submit() {
    this.user = { 'name': 'Tebogo', 'surname': 'FAYA' };
    swal({
      title: 'Finalise',
      text: "Are you ready to save?",
      type: 'warning',
      showCancelButton: true,
      confirmButtonClass: 'btn btn-success',
      cancelButtonClass: 'btn btn-danger',
      cancelButtonText: 'No',
      confirmButtonText: 'Yes',
       buttonsStyling: false
    }).then((result) => {
      if (result.value) {
        this._service.createUser(this.user)
          .subscribe(res => {
            console.log(res);
            console.log('DONE!');
            swal(
              {
                title: 'DONE',
                text: 'Information Saved.',
                type: 'success',
                confirmButtonClass: "btn btn-success",
                buttonsStyling: false
    
              }

              )
          
          });
      }
    })
  }
}
