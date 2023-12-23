import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

interface Products {
  code : number,
  name : string,
  category : string,
  quantity : number
}


@Component({
  selector: 'app-productsPage',
  templateUrl: './productsPage.component.html',
  styleUrls : ['./productsPage.component.css'],
})
export class ProductsPageComponent {

  public products : Products[] = [
    {
      name : 'Dayani',
      code : 1,
      category: 'Mujer',
      quantity : 1,
    },
    {
      name : 'Camilo',
      code : 2,
      category: 'Hombre',
      quantity : 1,
    },
    {
      name : 'Andrea',
      code : 3,
      category: 'Mujer',
      quantity : 1,
    },
    {
      name : 'Rogelio',
      code : 4,
      category: 'Hombre',
      quantity : 1,
    },
    {
      name : 'Julian',
      code : 5,
      category: 'Hombre',
      quantity : 1,
    }
  ];

  private fb = inject(FormBuilder);

  public color : string = 'green';

  public myForm : FormGroup = this.fb.group({
    name : ['', [ Validators.required, Validators.minLength(6), Validators.email]],
  })

  onSave(){
    if ( !this.myForm.valid ) return
    console.log(this.myForm.value);
  }
}
