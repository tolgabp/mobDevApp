import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from 'src/app/services/movie.service';

export interface ApiResult {
  page: number;
  results: any[]
  total_pages: number;
  total_results: number;
}

@Component({
  selector: 'app-film-details',
  templateUrl: './film-details.page.html',
  styleUrls: ['./film-details.page.scss'],
})
export class FilmDetailsPage implements OnInit {
  movie: any | null = null;

  constructor(private activatedRoute: ActivatedRoute, private movieService: MovieService) { }
  ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if (id) {
    this.movieService.getMovieDetails(id).subscribe((res) => { 
      console.log(res); 
      this.movie = res;
    })
  }}
  
}
