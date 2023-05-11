import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

export interface ApiResult {
  page: number;
  results: any[]
  total_pages: number;
  total_results: number;
}
@Injectable({
  providedIn: 'root',
})
@Component({
  selector: 'app-film-details',
  templateUrl: './film-details.page.html',
  styleUrls: ['./film-details.page.scss'],
})
export class FilmDetailsPage implements OnInit {
  constructor(private activatedRoute: ActivatedRoute, private http: HttpClient) { }
  ngOnInit() {
  }
  getTopRatedFilms(page = 1): Observable<ApiResult> { //page parameter because it is a paginated resource AND observable returns an object of the type ApiResult 
    return this.http.get<ApiResult>(`${environment.baseUrl}/movie/popular?api_key=${environment.apiKey}&page=${page}`); //get request and Observale is used to implement asynchronous functions
  }
  getMovieDetails(id: string) {
    return this.http.get(`${environment.baseUrl}/movie/${id}?api_key=${environment.apiKey}`);
  }
}
