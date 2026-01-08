import {Component, ElementRef, ViewChild} from '@angular/core';
import {TranslateModule} from '@ngx-translate/core';


@Component({
  selector: 'app-about-me',
  imports: [TranslateModule],
  templateUrl: './about-me.html',
  styleUrl: './about-me.scss'
})
export class AboutMe {
  @ViewChild('slideLeft') slideLeft!: ElementRef;
  @ViewChild('slideRight') slideRight!: ElementRef;
  @ViewChild('slideIn') slideIn!: ElementRef;

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
      threshold: 0.1
    });

    observer.observe(this.slideLeft.nativeElement);
    observer.observe(this.slideRight.nativeElement);
    observer.observe(this.slideIn.nativeElement);
  }
}

