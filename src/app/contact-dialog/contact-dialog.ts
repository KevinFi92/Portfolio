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
import {HighlightStore} from '../shared/footer/highlight.store';

@Component({
  selector: 'app-contact-dialog',
  imports: [MatFormFieldModule, MatInputModule, MatSelectModule, MatDialogModule, ReactiveFormsModule, MatButton,
    FormsModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './contact-dialog.html',
  styleUrl: './contact-dialog.scss'
})
export class ContactDialog {
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


  mailTest = true;

  post = {
    endPoint: 'https://deineDomain.de/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };


  onSubmit(ngForm: NgForm) {
    if (ngForm.submitted && ngForm.form.valid && !this.mailTest) {
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
    } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {

      ngForm.resetForm();
    }

  }
}
