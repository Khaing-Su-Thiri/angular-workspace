import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form-demo',
  templateUrl: './reactive-form-demo.component.html',
  styleUrls: ['./reactive-form-demo.component.scss'],
})
export class ReactiveFormDemoComponent implements OnInit {
  genders = ['male', 'female'];
  singupForm!: FormGroup;

  constructor() {}

  onSubmit() {
    console.log(this.singupForm);
    console.log(this.singupForm.value.username);
    console.log(this.singupForm.value.email);
    console.log(this.singupForm.value.secret);
    console.log(this.singupForm.value.gender);
    this.singupForm.reset({
      secret: 'pet',
      gender: 'male',
    });
  }

  ngOnInit(): void {
    this.singupForm = new FormGroup({
      username: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      secret: new FormControl('pet'),
      gender: new FormControl('male'),
    });
  }
}
