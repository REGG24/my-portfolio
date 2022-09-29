import { Component, OnInit } from '@angular/core';
import { Project } from '../../interfaces/project';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = [
    {
      title: 'Anime List',
      description: 'A CRUD application made to manage a list of animes series.',
      imgPath: [
        "./assets/img/anime_list_card.PNG",
        "./assets/img/anime_list_list.PNG"
      ],
      tools: 'React.js 17.0.2, NodeJS 14.17',
      platform: 'web'
    }, 
    {
      title: 'Library',
      description: 'A CRUD application to manage the data of a library',
      imgPath: [
        "./assets/img/library_clients.PNG",
        "./assets/img/library_books.PNG"
      ],
      tools: 'Angular 11, Bootstrap 4, Spring boot 5.3, JPA, Hibernate, Java 8 and SQL Server',
      platform: 'web'
    },
    {
      title: 'Eliminacion Gaussiana',
      description: 'A mobile application for android that solves systems of linear equations published in the Play Store',
      imgPath: [
        "./assets/img/principal.png",
        "./assets/img/procedure.png",
        "./assets/img/result.png"
      ],
      tools: 'Java 8, Android Studio',
      platform: 'android',
      link: 'https://play.google.com/store/search?q=eliminacion+gaussiana&c=apps&hl=es_MX'
    }
  ];

  constructor() { }

  ngOnInit(): void {
    
  }

}
