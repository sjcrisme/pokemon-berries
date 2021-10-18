import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CatalogComponent } from './catalog/catalog.component';
import { ItemComponent } from './item/item.component';
import { ViewResolver } from './core/view.resolver';

const routes: Routes = [
  {
    path: 'list',
    component: CatalogComponent
  },
  {
    path: 'view/:id/firmness/:name',
    component: ItemComponent,
    resolve: {data: ViewResolver}
  },
  {
    path: '',
    redirectTo: '/list',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
