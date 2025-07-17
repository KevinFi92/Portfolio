import { Component } from '@angular/core';
import { SingleProject } from './single-project/single-project';

@Component({
  selector: 'app-projects',
  imports: [SingleProject],
  templateUrl: './projects.html',
  styleUrl: './projects.scss'
})
export class Projects {

}
