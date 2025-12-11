import {Component, Input} from '@angular/core';
import {MatButton} from '@angular/material/button';
import {TranslatePipe} from '@ngx-translate/core';


@Component({
  selector: 'app-single-project',
  imports: [MatButton, TranslatePipe],
  templateUrl: './single-project.html',
  styleUrl: './single-project.scss'
})
export class SingleProject {
  @Input() project!: { name: string; description: string;
    image: string; link: string;
    GitHub: string; inProgress: boolean;}




}
