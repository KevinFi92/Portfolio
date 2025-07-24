import {Component, Input} from '@angular/core';
import {MatButton} from '@angular/material/button';

@Component({
  selector: 'app-single-project',
  imports: [
    MatButton
  ],
  templateUrl: './single-project.html',
  styleUrl: './single-project.scss'
})
export class SingleProject {
  @Input() project!: { name: string; description: string; image: string }



}
