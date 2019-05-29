import { Component, OnInit } from '@angular/core';
import { TableData } from '../../md/md-table/md-table.component';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/SERVICE/service.service'; // service link here


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  public tableData2: TableData;
  users;
  use;
  id: number;
  name: string;
  surname: string;
  email: string;
  role: string;

  constructor(private router: Router, private _service: ServiceService) { }

  ngOnInit() {
/*
    this._service.getUsers()
      .subscribe(res => {
        this.use = res
        this.users = this.use.response
        console.log(this.users),
      err => console.log(err)})
*/

   this.tableData2 = {
       headerRow: [ 'ID', 'Name',  'Surname', 'Email', 'Role' ],
       dataRows: [
           ['1', 'Dakota thoyt', '$36,738', 'Niger', 'Oud-Turnhout' ],
           ['2', 'Minerva Hooper', '$23,789', 'Curaçao', 'Sinaai-Waas'],
           ['3', 'Sage Rodriguez', '$56,142', 'Netherlands', 'Baileux' ],
           ['4', 'Philip Chaney', '$38,735', 'Korea, South', 'Overland Park' ],
           ['5', 'Doris Greene', '$63,542', 'Malawi', 'Feldkirchen in Kärnten', ],
           ['6', 'Mason Porter', '$78,615', 'Chile', 'Gloucester' ]
       ]
    };
    
  }

  createUser() {
    this.router.navigate(['dummyTest/createuser']);
  }



}
