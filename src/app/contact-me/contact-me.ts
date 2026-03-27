import {ChangeDetectionStrategy, Component, effect, ElementRef, inject, signal, ViewChild} from '@angular/core';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDialogModule} from '@angular/material/dialog';
import { NgForm, ReactiveFormsModule} from '@angular/forms';
import {FormsModule} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {HighlightStore} from '../shared/highlight.store';
import {snackbar} from './snackbar/snackbar';
import {MatCheckbox} from '@angular/material/checkbox';
import {TranslatePipe} from '@ngx-translate/core';
import {RouterLink} from '@angular/router';


@Component({
  selector: 'app-contact-me',
  imports: [MatFormFieldModule, MatInputModule, MatSelectModule, MatDialogModule, ReactiveFormsModule,
    FormsModule, snackbar, MatCheckbox, TranslatePipe, RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './contact-me.html',
  styleUrl: './contact-me.scss'
})
export class ContactMe {
  @ViewChild('emailInput') emailInput!: ElementRef<HTMLInputElement>;
  @ViewChild('contactForm') contactForm!: ElementRef<HTMLInputElement>;
  @ViewChild(snackbar) snackbarComponent!: snackbar;

  http = inject(HttpClient);




  privacyAccepted = false;

  constructor(private highlightStore: HighlightStore) {




    effect(() => {
      if (this.highlightStore.highlightEmail()) {
        this.focusAndHighlight();
      }
    });
  }

  focusAndHighlight() {
    const input = this.emailInput?.nativeElement;
    const form = this.contactForm?.nativeElement;
    if (input) {
      input.focus();
      form.classList.add('highlight');
      setTimeout(() => form.classList.remove('highlight'), 1000);
    }
  }




  contactData = {
    name: "",
    email: "",
    message: ""
  }


  post = {
    endPoint: 'https://kevin-fischer.dev/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };


  onSubmit(ngForm: NgForm) {
    if (ngForm.submitted && ngForm.form.valid) {
      this.contactData = {
        name: this.contactData.name.trim(),
        email: this.contactData.email.trim(),
        message: this.contactData.message.trim(),
      };
      this.http.post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {
            this.snackbarComponent.openSuccess();
            ngForm.resetForm();
            this.privacyAccepted = false;
          },
          error: (error) => {
            this.snackbarComponent.openError();
          },
          complete: () => console.info('send post complete'),
        });
    } else if (ngForm.submitted && !ngForm.form.valid) {
      this.snackbarComponent.openError();
    }
  }
}

