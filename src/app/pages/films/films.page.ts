import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InfiniteScrollCustomEvent, LoadingController, NavController } from '@ionic/angular';
import { environment } from 'src/environments/environment';
import { MovieService } from 'src/app/services/movie.service';



@Component({
  selector: 'app-films',
  templateUrl: './films.page.html',
  styleUrls: ['./films.page.scss'],
})
export class FilmsPage implements OnInit {

  movies: any[] = [];
  currentPage = 1;
  imageBaseUrl = environment.images;

  constructor(private navController: NavController,
    private router: Router,
    private movieService: MovieService,
    private loadingCtrl: LoadingController
  ) { }

  ngOnInit() {
    this.loadMovies();
  }

  async loadMovies(event?: InfiniteScrollCustomEvent) {
    const loading = await this.loadingCtrl.create({
      message: 'Loading...',
      spinner: 'bubbles',
    });
    await loading.present();

    this.movieService.getTopRatedFilms(this.currentPage).subscribe((res) => {
      loading.dismiss();
      this.movies.push(...res.results);
      console.log(res);

      event?.target.complete();
      
      if(event){
        event.target.disabled = res.total_pages === this.currentPage;
      }
    }); // to get the data from observable we need to subscribe to it
  }

  loadMore(event: InfiniteScrollCustomEvent) {
    this.currentPage++;
    this.loadMovies(event);
  }




  openDetails() {
    this.router.navigateByUrl(`/tabs/films/42`);
  }
  gotoPeople() {
    this.navController.navigateRoot(`/tabs/people`)
  }
  gotoPlanets() {
    this.navController.navigateRoot(`/tabs/planets`)
  }
  backToHomePage() {
    this.router.navigateByUrl(`/tabs/home`);
  }
}
