import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsPageComponent } from './pages/productsPage/productsPage.component';
import { BootstrapPageComponent } from './pages/bootstrap-page/bootstrap-page.component';
import { Opcion1Component } from './pages/bootstrap-page/opcion1/opcion1.component';

const routes: Routes = [

  {
    path: '',
    children : [
      { path: 'products', component: ProductsPageComponent },
      { path: 'bootstrap',component:BootstrapPageComponent, children: [
        { path: 'opcion1',component: Opcion1Component },
        { path:'**', redirectTo: 'bootstrap' }
      ] },
      { path: '**', redirectTo: 'products' }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
