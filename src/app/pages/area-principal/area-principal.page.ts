import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from "../../services/authentication.service";

@Component({
  selector: 'app-area-principal',
  templateUrl: './area-principal.page.html',
  styleUrls: ['./area-principal.page.scss'],
})
export class AreaPrincipalPage implements OnInit {

  constructor(public authService: AuthenticationService) { }

  ngOnInit() {
  }

}
