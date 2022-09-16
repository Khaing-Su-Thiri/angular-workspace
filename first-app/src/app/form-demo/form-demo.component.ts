import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form-demo',
  templateUrl: './form-demo.component.html',
  styleUrls: ['./form-demo.component.scss'],
})
export class FormDemoComponent implements OnInit {
  genders = ['male', 'female'];

  defaultSecret = 'pet';
  defaultGender = 'male';

  constructor() {}

  onSubmit(form: NgForm) {
    console.log(form);
    console.log(form.value.username);
    console.log(form.value.email);
    console.log(form.value.secret);
    console.log(form.value.gender);
    form.reset({
      secret: this.defaultSecret,
      gender: this.defaultGender,
    });
  }

  ngOnInit(): void {}
}
