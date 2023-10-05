import { Component } from '@angular/core';
import { Platform } from "@ionic/angular";
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AuthenticationService } from "./services/authentication.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private auth:AuthenticationService, private platform: Platform,   private fireAuth: AngularFireAuth, private router: Router)  {
    
  }
 
  initializeApp(){
    this.platform.ready().then(
      ()=>{
        this.fireAuth.onAuthStateChanged(user =>{
          if (user) {
            this.router.navigate(['/area-principal']);
            
          } else {
            this.router.navigate(["/login"]);
          
          }
        });
      }
    );

   
  }
  
}
