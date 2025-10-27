import {Component, EventEmitter, Input, Output} from '@angular/core';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-menu',
  imports: [MatMenuModule, MatButtonModule, MatIconModule, RouterLink],
  templateUrl: './menu.html',
  styleUrl: './menu.scss'
})
export class Menu {
  @Input() links!: {
    isAction?: boolean;
    isExternal?: boolean;
    isRoute?: boolean;
    isSection?: boolean;
    name: string; link: string;
  }[];
  @Output() linkClick = new EventEmitter<string>();

  onLinkClick(link: { name: string; link: string; isAction?: boolean }) {
    if (link.isAction) {
      this.linkClick.emit(link.link);
    }
  }

}

