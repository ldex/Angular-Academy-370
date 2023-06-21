import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './shared/home.component';
import { ContactComponent } from './shared/contact.component';
import { AdminComponent } from './shared/admin.component';
import { ErrorComponent } from './shared/error.component';

const routes: Routes = [
  { path: '', redirectTo:'/home', pathMatch:'full' },
  { path: 'home', component: HomeComponent, title: 'Store Home' },
  { path: 'contact', component: ContactComponent, title: 'Contact' },
  { path: 'admin', component: AdminComponent, title: 'Administration' },
  { path: 'products', loadChildren: () =>
                        import('./products/products.module')
                        .then(m => m.ProductsModule) },
  { path: '**', component: ErrorComponent, title: 'Error' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
