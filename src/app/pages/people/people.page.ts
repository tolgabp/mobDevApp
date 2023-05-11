import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-people',
  templateUrl: './people.page.html',
  styleUrls: ['./people.page.scss'],
})
export class PeoplePage implements OnInit {

  constructor(private navController: NavController, private router: Router) { }

  ngOnInit() {
  }

  backToHomePage(){
    this.router.navigateByUrl(`/tabs/home`);
  }
}
