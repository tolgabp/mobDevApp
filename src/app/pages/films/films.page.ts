import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InfiniteScrollCustomEvent, LoadingController, NavController } from '@ionic/angular';
import { FilmDetailsPage } from '../film-details/film-details.page';
import { environment } from 'src/environments/environment';


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
    private filmDetailsPage: FilmDetailsPage,
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

    this.filmDetailsPage.getTopRatedFilms(this.currentPage).subscribe((res) => {
      loading.dismiss();
      //this.movies = [...this.movies, ...res.results];
      this.movies.push(...res.results);
      console.log(res);

      event?.target.complete();
      if(event){
        event.target.disabled = res.total_pages === this.currentPage;
      }
    }); // to get the data from observable we need to subsribe to it
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
