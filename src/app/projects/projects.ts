import {Component, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {SingleProject} from './single-project/single-project';
import { Swiper } from 'swiper/types';
import { register } from 'swiper/element/bundle';

register();
@Component({
  standalone: true,
  selector: 'app-projects',
  imports: [SingleProject],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './projects.html',
  styleUrl: './projects.scss'
})
export class Projects {
  id!:number;
  projects = [
    {
      name: "Join",
      description: "Join is a Kanbanboard to organize your teams tasks." +
        "Its build with Javascript and Firebase.",
      image: "assets/img/projects/join.png"
    },
    {
      name: "El-Pollo-Loco",
      description: "EL-Pollo-Loco is a 2D Videogame made with Javascript.",
      image: "assets/img/projects/el_pollo_loco.png"
    },
    {
      name: "DABubble",
      description: "This Project is a slack/discord Clone made with Angular.",
      image: "assets/img/myLogo.png"
    }
  ]
  private project: any;

  onProgress(event: CustomEvent<[Swiper, number]>) {
    const [swiper, progress] = event.detail;
    console.log(progress);
  }

  onSlideChange() {
    console.log('slide changed');
  }


  nextProjectLeft() {
    setTimeout(() => {
      [this.projects[0], this.projects[1], this.projects[2]] = [this.projects[1], this.projects[2], this.projects[0]];
    }, 500)

    }

  nextProjectRight(){
    setTimeout(() => {[this.projects[0], this.projects[1], this.projects[2]] = [this.projects[2], this.projects[0], this.projects[1]];}, 500)

  }

}
