import { Component } from '@angular/core';
import {MatButton} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';

@Component({
  selector: 'app-skills',
  imports: [MatButton, MatDialogModule, MatFormFieldModule, MatInputModule],
  templateUrl: './skills.html',
  styleUrl: './skills.scss'
})
export class Skills {


}
