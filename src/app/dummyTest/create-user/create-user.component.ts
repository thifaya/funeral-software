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
   
  }
}
