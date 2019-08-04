import { Component } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { EmployeeService } from './service/employee.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  welcome = 'Employee Information Management System (EIMS)';

signupForm: FormGroup;

public Txtfirstname: any;
public Txtlastname: any;
public Txtgender: any;
public Txtdesignation: any;
public Txtlocation: any;

constructor(private formBuilder: FormBuilder,
            private empService: EmployeeService) {

              this.signupForm = this.formBuilder.group({
                firstname: ['', Validators.required],
                lastname: ['', Validators.required],
                gender: ['', Validators.required],
                designation: ['', Validators.required],
                location: ['', Validators.required]

              });
            }


  submit() {
    const firstname = this.signupForm.value.firstname;
    const lastname = this.signupForm.value.lastname;
    const gender = this.signupForm.value.gender;
    const designation = this.signupForm.value.designation;
    const location = this.signupForm.value.location;
    this.empService.addEmployee(firstname, lastname, gender, designation, location)
               .subscribe((res: any) => {
                 if (res.status === true) {
                   alert('Employee saved!!!');
                 }
                 console.log('empl', res);
                 this.signupForm.reset();

               });
  }
}
