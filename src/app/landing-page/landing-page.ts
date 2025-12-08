import {Component} from '@angular/core';
import {MatButton} from '@angular/material/button';
import {RouterLink} from '@angular/router';
import {TranslateModule} from '@ngx-translate/core';


@Component({
  selector: 'app-landing-page',
  imports: [
    MatButton,
    RouterLink,
    TranslateModule
  ],
  templateUrl: './landing-page.html',
  styleUrl: './landing-page.scss'
})
export class LandingPage {

}


