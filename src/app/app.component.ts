import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';

  paginas: object[] = [
    {
      id: 1,
      name: 'Prédios e Salas',
      icon: 'business',
      path: 'building'
    },
    {
      id: 2,
      name: 'Disciplinas',
      icon: 'class',
      path: ''
    },
    {
      id: 3,
      name: 'Aulas',
      icon: 'menu_book',
      path: ''
    },
    {
      id: 4,
      name: 'Edições de disciplinas',
      icon: 'today',
      path: ''
    },
    {
      id: 5,
      name: 'Avaliações',
      icon: 'rate_review',
      path: ''
    },
    {
      id: 6,
      name: 'Recursos',
      icon: 'view_carousel',
      path: ''
    },
    {
      id: 7,
      name: 'Alunos',
      icon: 'school',
      path: ''
    },
    {
      id: 8,
      name: 'Currículos',
      icon: 'contact_page',
      path: ''
    }
  ];
}
