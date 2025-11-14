import {Component, inject} from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {FormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {ContactMe} from '../contact-me';

@Component({
  selector: 'app-snackbar',
  imports: [MatButtonModule, MatInputModule, FormsModule, MatFormFieldModule],
  templateUrl: './snackbar.html',
  styleUrl: './snackbar.scss'
})
export class snackbar {
  private snackbar = inject(MatSnackBar);

  durationInSeconds = 2.5;

  openSuccess() {
    this.snackbar.open('email sent', 'Close', {
      duration: this.durationInSeconds * 1000,
    });
  }

  openError() {
    this.snackbar.open('something went wrong', 'Close', {
      duration: this.durationInSeconds * 1000,
    });
  }
}
