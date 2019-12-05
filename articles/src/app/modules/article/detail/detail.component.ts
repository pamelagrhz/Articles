import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ArticleService } from '../article.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.sass']
})
export class DetailComponent implements OnInit {
  article$: Observable<any>;

  constructor(
    private service: ArticleService,
    private route: ActivatedRoute
  ) {
    this.route.params
      .subscribe(params => {
        this.getArticle(params.id);
      })
  }

  ngOnInit() {
  }

  getArticle(id: number) {
    this.article$ = this.service.getById(id);
  }

}
