import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConfirmPasswordValidator } from '../providers/CustomValidators.validator';
@Component({
  selector: 'billing-address-form',
  templateUrl: './billing-address-form.html',
  styleUrls: ['./billing-address.css'],
})
export class BillingAddressFormComponent implements OnInit {
  myForm!: FormGroup;
  //Form state
  loading = true;

  constructor(private fb: FormBuilder) {}
  ngOnInit() {
    this.myForm = this.fb.group(
      {
        firstName: ['', [Validators.required]],
        lastName: ['', [Validators.required]],
        address1: ['', [Validators.required]],
        address2: ['', [Validators.required]],
        cityOrDistrict: ['', [Validators.required]],
        provinceOrState: ['', [Validators.required]],
        country: ['', [Validators.required]],
        postalCode: ['', [Validators.required]],
        isSameBillingAddress: true,
        isCreateAccount: true,
        email: ['', [Validators.required, Validators.email]],
        password: [
          '',
          [
            Validators.required,
            Validators.pattern(
              /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/
            ),
          ],
        ],
        confirmPassword: [
          '',
          [
            Validators.required,
            Validators.pattern(
              /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/
            ),
          ],
        ],
      },
      {
        validator: ConfirmPasswordValidator('password', 'confirmPassword'),
      }
    );

    // this.myForm.valueChanges.subscribe(console.log);
    // console.log(this.myForm.get('confirmPassword')?.errors);
  }

  submitButtonClicked() {
    console.log(this.myForm.get('password')?.errors);
    this.loading = false;
    alert('form submitted ');
    console.log(this.myForm.value);
    this.loading = true;
  }
}
