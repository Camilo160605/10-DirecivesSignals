import { Component} from '@angular/core';

@Component({
  selector: 'app-bootstrap-page',
  templateUrl: './bootstrap-page.component.html',
})
export class BootstrapPageComponent {

  itemsList : string[] = ['Opcion 1','Opcion 2','Opcion 3','Opcion 4','Opcion 5']

  constructor() { }

}
