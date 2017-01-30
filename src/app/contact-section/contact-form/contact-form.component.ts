import {Component, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, Validators} from "@angular/forms";
import {EmailValidator} from "./email-validator";

@Component({
  selector: 'app-contact-form',
  templateUrl: 'contact-form.component.html',
  styleUrls: ['contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  private contactFrom: FormGroup;

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.contactFrom = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, EmailValidator.mailFormat]],
      subject: ['', Validators.required],
      message: ['', Validators.required]
    })
  }

  submit() {
    //do form submit
    console.log(this.contactFrom);
  }

}
