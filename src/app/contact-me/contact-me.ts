import {ChangeDetectionStrategy, Component, effect, ElementRef, inject, signal, ViewChild} from '@angular/core';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDialogModule} from '@angular/material/dialog';
import {FormControl, NgForm, ReactiveFormsModule, Validators} from '@angular/forms';
import {merge} from 'rxjs';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {MatButton} from '@angular/material/button';
import {FormsModule} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {HighlightStore} from '../shared/highlight.store';
import {snackbar} from './snackbar/snackbar';


@Component({
  selector: 'app-contact-me',
  imports: [MatFormFieldModule, MatInputModule, MatSelectModule, MatDialogModule, ReactiveFormsModule, MatButton,
    FormsModule, snackbar],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './contact-me.html',
  styleUrl: './contact-me.scss'
})
export class ContactMe {
  @ViewChild('emailInput') emailInput!: ElementRef<HTMLInputElement>;
  @ViewChild('contactForm') contactForm!: ElementRef<HTMLInputElement>;
  @ViewChild(snackbar) snackbarComponent!: snackbar;
  readonly email = new FormControl('', [Validators.required, Validators.email]);
  readonly name = new FormControl('', [Validators.required, Validators.email]);
  readonly text = new FormControl('', [Validators.required, Validators.email]);
  http = inject(HttpClient);


  errorEmail = signal('');
  errorName = signal('');
  errorText = signal('');


  constructor(private highlightStore: HighlightStore) {
    merge(this.email.statusChanges, this.email.valueChanges)
      .pipe(takeUntilDestroyed())
      .subscribe(() => this.updateErrorMessage());

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

//TODO: make ErrorMessage work for all form fields
  updateErrorMessage() {

    if (this.email.hasError('required')) {
      this.errorEmail.set('You must enter a valid email address');
    }
    if (this.name.hasError('required')) {
      this.errorName.set('You must enter a Fullname');
    }
    if (this.text.hasError('required')) {
      this.errorText.set('You must enter a message');
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
      this.http.post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {
            this.snackbarComponent.openSuccess();
            ngForm.resetForm();
          },
          error: (error) => {
            console.error(error);
            this.snackbarComponent.openError();
          },
          complete: () => console.info('send post complete'),
        });
    } else if (ngForm.submitted && !ngForm.form.valid) {
      this.snackbarComponent.openError();
    }
  }

}
