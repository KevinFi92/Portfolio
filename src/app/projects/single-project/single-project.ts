import {Component, EventEmitter, Input, Output} from '@angular/core';
import {MatButton} from '@angular/material/button';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-single-project',
  imports: [
    MatButton,
    NgOptimizedImage
  ],
  templateUrl: './single-project.html',
  styleUrl: './single-project.scss'
})
export class SingleProject {
  @Input() project!: { name: string; description: string; image: string;}
  @Input() id!: number;
  @Output() projectId = new EventEmitter<number>();



}
