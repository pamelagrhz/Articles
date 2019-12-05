import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(
    private http: HttpClient,
  ) { }


  public get(): Observable<any[]> {
    return this.http.get<any[]>(environment.URL_ARTICLES);
  }

  public getById(id) {
    console.log(id);
    let params = { id };
    return this.http.get(environment.URL_ARTICLES, { params: params })
      .pipe(
        map(res => {
          return res[0];
        })
      );
  }

}
