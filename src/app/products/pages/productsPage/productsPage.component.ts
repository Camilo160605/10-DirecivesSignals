import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CanMatch } from '@angular/router';

@Component({
  selector: 'app-productsPage',
  templateUrl: './productsPage.component.html',
})
export class ProductsPageComponent {

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
