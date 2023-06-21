import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductInsertComponent } from './product-insert/product-insert.component';

const routes: Routes = [
  { path: '', component: ProductListComponent, title: 'Products List' },
  { path: 'insert', component: ProductInsertComponent, title: 'Product Insert Form' },
  { path: ':id', component: ProductDetailComponent, title: 'Selected Product Details' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
