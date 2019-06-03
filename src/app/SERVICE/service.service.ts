import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User, XUser } from './Users';
import { Members } from './members'
import { Society } from './society'

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  user: User
  member: string = '/assets/json/members.json'
  society: string = '/assets/json/society.json'
  beneficiary: string = '/assets/json/beneficiary.json'
  constructor(private _http: HttpClient) { }

  Header: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
    'responseType': 'json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
    'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization'
  });

  getUsers(): Observable<User> {
    return this._http.get<User>('http://greenlinks1.dedicated.co.za:3000/api/employee', { headers: this.Header })
  }


  //////  LOGIN SERVICE  //////////
  loginUser(jsonData) {
    return this._http.post('http://greenlinks1.dedicated.co.za:3000/api/login', jsonData, { headers: this.Header });
  }

  //////  MEMBERS SERVICE  //////////
  getMembers() {
    return this._http.get<Members>('http://greenlinks1.dedicated.co.za:3000/api/members', { headers: this.Header })

  }

  searchMemberBySurname(surname) {
    return this._http.get(' http://greenlinks1.dedicated.co.za:3000/api/serchbysurname/' + surname, { headers: this.Header })

  }

  searchMemberByIdNumber(idnumber) {
    return this._http.get('http://greenlinks1.dedicated.co.za:3000/api/serchbyidnumber/' + idnumber, { headers: this.Header })

  }

  searchMemberByMembershipNumber(membership) {
    return this._http.get('http://greenlinks1.dedicated.co.za:3000/api/serchbymembershipnumber/' + membership, { headers: this.Header })

  }

  getSingleMember(id) {
    return this._http.get('http://greenlinks1.dedicated.co.za:3000/api/members/' + id, { headers: this.Header })

  }

  removeMember(id) {
    return this._http.delete('http://greenlinks1.dedicated.co.za:3000/api/members/' + id, { headers: this.Header })

  }

  updateMember(id, data) {
    return this._http.put('http://greenlinks1.dedicated.co.za:3000/api/members/' + id, data, { headers: this.Header });
    //return this._http.get(this.member);    2019163142
  }

  createMember(data) {
    return this._http.post<any>('http://greenlinks1.dedicated.co.za:3000/api/members', data, { headers: this.Header });
  }

  //////  SOCIETY SERVICE  ////////// 
  getSociety() {
    //  return this._http.get<Members>('http://greenlinks1.dedicated.co.za:3000/api/society', { headers: this.Header })
    return this._http.get<Society>(this.society);
  }

  getSingleSocietyr(id) {
    // return this._http.get('http://greenlinks1.dedicated.co.za:3000/api/members/'+id, { headers: this.Header })
    return this._http.get(this.society);
  }

  removeSociety(id) {
    // return this._http.delete('http://greenlinks1.dedicated.co.za:3000/api/members/'+id, { headers: this.Header })
    return this._http.get(this.society);
  }

  updateSociety(id, data) {
    //  return this._http.put('http://greenlinks1.dedicated.co.za:3000/api/members/'+id, data, { headers: this.Header });
    return this._http.get(this.society);
  }


  //////  BENEFICIARY SERVICE  //////////
  getBeneficiary() {
    return this._http.get<Members>('http://greenlinks1.dedicated.co.za:3000/api/beneficiaries', { headers: this.Header })
  }

  createMemberBeneficiary(data) {
    //return this._http.post('http://greenlinks1.dedicated.co.za:3000/api/members', data, { headers: this.Header })
    return this._http.get(this.beneficiary);
  }

  getMemberBeneficiary(id) {
    return this._http.get('http://greenlinks1.dedicated.co.za:3000/api/memberbeneficiaries/' + id, { headers: this.Header })
  }

  removeBeneficiary(id) {
    return this._http.delete('http://greenlinks1.dedicated.co.za:3000/api/beneficiaries/' + id, { headers: this.Header })

  }

  updateBeneficiary(id, data) {
    return this._http.put('http://greenlinks1.dedicated.co.za:3000/api/beneficiaries/' + id, data, { headers: this.Header });
    //return this._http.get(this.beneficiary);   1
  }

  payments(id) {
    return this._http.get('http://greenlinks1.dedicated.co.za:3000/api/payments/' + id, { headers: this.Header })
  }

}
