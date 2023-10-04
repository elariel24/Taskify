import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { AuthenticationService } from "../services/authentication.service";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  constructor(private auth: AuthenticationService, private router: Router) {}

  ngOnInit() {
    if (this.auth.isLoggedIn){
      this.router.navigate(['area-principal']);
    }
  }

}
