import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { AuthenticationService } from "../services/authentication.service";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  constructor(private router: Router, public authService: AuthenticationService) {}

  ngOnInit() {
  }

  crearCuenta(){
    this.router.navigate(['register']);
  }

  login(){
    this.router.navigate(['login']);
    
  }

}
