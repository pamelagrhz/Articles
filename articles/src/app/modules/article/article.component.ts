import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Route } from '@angular/router';
import { ArticleService } from './article.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.sass']
})
export class ArticleComponent implements OnInit {

  public articles: any = [];

  constructor(
    route: ActivatedRoute,
    router: Router,
    private service: ArticleService
  ) {
    route.params.subscribe(
      params => {
        if(!params["id"] || params["id"] === undefined){
          console.log('no exists');
          router.navigateByUrl('/');
        }else{
          this.getById(params["id"]);
        }
      }
    )
  }

  ngOnInit() {
    this.get();
  }

  private get(){
    this.service.get().subscribe(
      res => {
        console.log(res);
        this.articles = res;
      },
      err => {
        console.log(err);
      }
    )
  }

  private getById(id){
    this.service.getById(id).subscribe(
      res => {
        console.log(res);
      },
      err => {
        console.log(err);
      }
    )
  }



}
