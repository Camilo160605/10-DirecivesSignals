import { Component} from '@angular/core';

interface menuItems {
  label: string,
  routerLink : string
}

@Component({
  selector: 'app-bootstrap-page',
  templateUrl: './bootstrap-page.component.html',
})
export class BootstrapPageComponent {

  itemsList : menuItems[] = [
    {
      label: 'Opcion1',
      routerLink: 'opcion1'
    },
    {
      label: 'Opcion2',
      routerLink: 'opcion2'
    },
    {
      label: 'Opcion3',
      routerLink: 'opcion3'
    },
    {
      label: 'Opcion4',
      routerLink: 'opcion4'
    },
    {
      label: 'Opcion5',
      routerLink: 'opcion5'
    },
  ]

  constructor() { }

}
