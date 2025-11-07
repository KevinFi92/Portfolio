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
import {MatSnackBarRef} from '@angular/material/snack-bar';

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
  readonly email = new FormControl('', [Validators.required, Validators.email]);
  http = inject(HttpClient);


  errorMessage = signal('');


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
      this.errorMessage.set('You must enter a value');
    } else if (this.email.hasError('email')) {
      this.errorMessage.set('Not a valid email');
    } else {
      this.errorMessage.set('');
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

            ngForm.resetForm();
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => console.info('send post complete'),
        });
    } else if (ngForm.submitted && ngForm.form.valid) {

      ngForm.resetForm();
    }
  }

}
