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
import {MatCheckbox} from '@angular/material/checkbox';
import {TranslatePipe} from '@ngx-translate/core';


@Component({
  selector: 'app-contact-me',
  imports: [MatFormFieldModule, MatInputModule, MatSelectModule, MatDialogModule, ReactiveFormsModule, MatButton,
    FormsModule, snackbar, MatCheckbox, TranslatePipe],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './contact-me.html',
  styleUrl: './contact-me.scss'
})
export class ContactMe {
  @ViewChild('emailInput') emailInput!: ElementRef<HTMLInputElement>;
  @ViewChild('contactForm') contactForm!: ElementRef<HTMLInputElement>;
  @ViewChild(snackbar) snackbarComponent!: snackbar;

  http = inject(HttpClient);


  errorEmail = signal('');
  errorName = signal('');
  errorText = signal('');

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
      this.http.post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {
            this.snackbarComponent.openSuccess();
            ngForm.resetForm();
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

