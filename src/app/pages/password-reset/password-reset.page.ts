import { Component, OnInit } from '@angular/core';
import { EmailAuthCredential } from 'firebase/auth';
import { AuthenticationService } from 'src/app/services/authentication.service';


@Component({
  selector: 'app-password-reset',
  templateUrl: './password-reset.page.html',
  styleUrls: ['./password-reset.page.scss'],
})
export class PasswordResetPage implements OnInit {
  
  constructor(public authService: AuthenticationService) { }

  ngOnInit() {
  }




}
