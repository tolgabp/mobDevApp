import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 
import { NavController } from '@ionic/angular';
 

@Component({
  selector: 'app-films',
  templateUrl: './films.page.html',
  styleUrls: ['./films.page.scss'],
})
export class FilmsPage implements OnInit {

  constructor(private navController: NavController, private router: Router) { }
 
  ngOnInit() {
  }

  openDetails(){
    this.router.navigateByUrl(`/tabs/films/42`);
  }
  gotoPlanets(){
    this.navController.navigateRoot(`/tabs/planets`)
  }

}
