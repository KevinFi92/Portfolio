import {Component, ElementRef, ViewChild} from '@angular/core';
import {MatButton} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {TranslatePipe} from '@ngx-translate/core';

@Component({
  selector: 'app-skills',
  imports: [MatButton, MatDialogModule, MatFormFieldModule, MatInputModule, TranslatePipe],
  templateUrl: './skills.html',
  styleUrl: './skills.scss'
})
export class Skills {

  @ViewChild('slideLeft') slideLeft!: ElementRef;
  @ViewChild('slideRight') slideRight!: ElementRef;

  ngAfterViewInit() {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
       else {
        entry.target.classList.remove('visible');
      }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -10% 0px'
    });

    observer.observe(this.slideLeft.nativeElement);
    observer.observe(this.slideRight.nativeElement);
  }

}


