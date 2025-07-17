import { Component } from '@angular/core';
import {FormsModule, ReactiveFormsModule, FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './contact-form.html',
  styleUrl: './contact-form.scss'
})
export class ContactForm {

  contactForm = new FormGroup(
    {
      name: new FormControl("", [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      message: new FormControl("",Validators.required)
    }
  )


  submit(){
    console.log("Submitted")
  }
}

