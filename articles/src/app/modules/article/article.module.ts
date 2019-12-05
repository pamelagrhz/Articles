import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArticleRoutingModule } from './article-routing.module';
import { ArticleComponent } from './article.component';
import { ListComponent } from './list/list.component';
import { DetailComponent } from './detail/detail.component';

@NgModule({
  declarations: [ArticleComponent, ListComponent, DetailComponent],
  imports: [
    CommonModule,
    ArticleRoutingModule
  ]
})
export class ArticleModule {

}
