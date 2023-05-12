import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ApiResult } from '../pages/film-details/film-details.page';

@Injectable({
    providedIn: 'root'
  })

export class MovieService {
    constructor(private http: HttpClient){}

    getTopRatedFilms(page = 1): Observable<ApiResult> { //page parameter because it is a paginated resource AND observable returns an object of the type ApiResult 
        return this.http.get<ApiResult>(`${environment.baseUrl}/movie/popular?api_key=${environment.apiKey}&page=${page}`); //get request and Observale is used to implement asynchronous functions
      }
      getMovieDetails(id: string) {
        return this.http.get(`${environment.baseUrl}/movie/${id}?api_key=${environment.apiKey}`);
      }
}

