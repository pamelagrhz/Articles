import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "articulos",
    loadChildren: () => import('./modules/article/article.module').then(m => m.ArticleModule)
    //lazyloading con article module y su ruta (.ts)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
