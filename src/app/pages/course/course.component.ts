import { Component } from '@angular/core';
import { Navtab } from 'src/app/commons/interfaces/nav-tab';
import {ListItem} from "../../commons/interfaces/list-item";
import { ModuleCourse } from 'src/app/commons/interfaces/module-course';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent {
  tabs: Navtab[] = [
    {
      id: 'conent-tab',
      label: 'Contenido',
      toogleTarget: 'content-tab-container'
    },
    {
      id: 'description-tab',
      label: 'Descripción',
      toogleTarget: 'description-tab-container'
    },
    {
      id: 'valoration-tab',
      label: 'Valoraciones',
      toogleTarget: 'valoration-tab-container'
    }
  ];
  contentModules: ModuleCourse[] = [
      {
       items: [
        {
          name: 'Introducción',
          timeStamps: 1,
        },
        {
          name: 'Variables y constates',
          timeStamps: 2,
        },
        {
          name: 'Promsesas y obserbables',
          timeStamps: 3,
        }
       ],
       name: 'Introducción a JavaScript'
      },
      {
        items: [
         {
           name: 'Instalación Viscual Code',
           timeStamps: 1,
         },
         {
           name: 'Instalación de Apache2',
           timeStamps: 2,
         },
         {
           name: 'Promsesas y obserbables',
           timeStamps: 3,
         }
        ],
        name: 'Instalación de ambiente de desarrollo'
       }
    ];
}
