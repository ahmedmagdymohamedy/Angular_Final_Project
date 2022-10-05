import { Router } from '@angular/router';
import { AuthenticationService } from './services/authentication.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(public authservice:AuthenticationService,
    private router:Router)
  {

  }
  logout()
  {
    this.authservice.logout().subscribe(()=>{
this.router.navigate([""]);
    });
  }

}
