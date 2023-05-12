import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.page.html',
  styleUrls: ['./home-page.page.scss'],
})
export class HomePage implements OnInit {

  

  constructor(private navController: NavController, private router: Router) { }

  ngOnInit() {
  }

  openDetails(){
    this.router.navigateByUrl(`/tabs/films`);
  }
  gotoPeople(){
    this.navController.navigateRoot(`/tabs/people`)
  }
  gotoPlanets(){
    this.navController.navigateRoot(`/tabs/planets`)
  }

}
