import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ArticleService } from '../article.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.sass']
})
export class ListComponent implements OnInit {
  articles$: Observable<any[]>;

  constructor(
    private service: ArticleService
  ) { }

  ngOnInit() {
    this.getArticles();
  }

  getArticles() {
    this.articles$ = this.service.get();
  }

}
