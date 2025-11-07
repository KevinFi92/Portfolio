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

  durationInSeconds = 1;

  openSnackBar() {
    this.snackbar.openFromComponent(ContactMe, {
      duration: this.durationInSeconds * 1000,
    });
  }
}
