import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConfirmPasswordValidator } from '../providers/CustomValidators.validator';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'billing-address-form',
  templateUrl: './billing-address-form.html',
  styleUrls: ['./billing-address.css'],
})
export class BillingAddressFormComponent implements OnInit {
  myForm!: FormGroup;
  //Form state
  dataSource!: any;
  loading = true;
  displayedColumns: string[] = ['firstName', 'lastName', 'age', 'dob'];

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.myForm = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      dob: ['', [Validators.required]],
    });

    this.route.paramMap.subscribe((params) => {
      if (params.has('id')) {
        this.getSinglePersonData(params.get('id'));
      }
    });
  }

  getSinglePersonData(id: any) {
    this.http
      .get(`https://golang-crud-api.herokuapp.com/api/persons/${id}`)
      .subscribe((response: any) => {
        this.myForm.patchValue({
          firstName: response.firstName,
          lastName: response.lastName,
          dob: response.dob.substr(0, 10),
        });
      });
  }

  create() {
    let payload = {
      firstName: this.myForm.value.firstName,
      lastName: this.myForm.value.lastName,
      dob: this.myForm.value.dob,
      image: '',
      address: '',
    };
    /*   let payload = {
      firstName: 'person 22',
      lastName: 'last name',
      dob: '1998-02-10',
      image: 'testing image2',
      age: 45,
    }; */
    this.http
      .post('https://golang-crud-api.herokuapp.com/api/persons', payload)
      .subscribe((response: any) => {
        this.myForm.reset();
      });
  }

  update(id: any) {
    let payload = {
      firstName: this.myForm.value.firstName,
      lastName: this.myForm.value.lastName,
      dob: this.myForm.value.dob,
      image: '',
      address: '',
    };
    /*   let payload = {
      firstName: 'person 22',
      lastName: 'last name',
      dob: '1998-02-10',
      image: 'testing image2',
      age: 45,
    }; */
    this.http
      .put(`https://golang-crud-api.herokuapp.com/api/persons/${id}`, payload)
      .subscribe((response: any) => {
        this.myForm.reset();
      });
  }

  submitButtonClicked() {
    this.loading = false;
    this.route.paramMap.subscribe((params) => {
      if (params.has('id')) {
        this.update(params.get('id'));
      } else {
        this.create();
      }
    });
    this.loading = true;
  }
}
