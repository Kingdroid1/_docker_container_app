import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  baseURL = `http://localhost:9000/api`;

  constructor(private httpClient: HttpClient) { }

  addEmployee(firstname, lastname, gender, designation, location) {
    const emp = {
      firstname,
      lastname,
      gender,
      designation,
      location
    };
    return this.httpClient.post(`${this.baseURL}/addEmp`, emp);
  }

}
