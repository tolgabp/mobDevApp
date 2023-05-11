import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController, NavController } from '@ionic/angular';
import { FilmDetailsPage } from '../film-details/film-details.page';


@Component({
  selector: 'app-films',
  templateUrl: './films.page.html',
  styleUrls: ['./films.page.scss'],
})
export class FilmsPage implements OnInit {

  movies : any[] = [];
  currentPage = 1;

  constructor(private navController: NavController, 
    private router: Router, 
    private filmDetailsPage: FilmDetailsPage, 
    private loadingCtrl: LoadingController
    ) { }

  ngOnInit() {
    this.loadMovies();
  }

  async loadMovies() {
    const loading = await this.loadingCtrl.create({
      message: 'Loading...',
      spinner: 'bubbles',
    });
    await loading.present();

    this.filmDetailsPage.getTopRatedFilms(this.currentPage).subscribe((res) => {
      loading.dismiss();
      this.movies = [...this.movies, ...res.results];
      console.log(res);
    }); // to get the data from observable we need to subsribe to it
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
