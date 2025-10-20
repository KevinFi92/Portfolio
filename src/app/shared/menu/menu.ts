import { Component } from '@angular/core';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-menu',
  imports: [MatMenuModule, MatButtonModule],
  templateUrl: './menu.html',
  styleUrl: './menu.scss'
})
export class Menu {

}
