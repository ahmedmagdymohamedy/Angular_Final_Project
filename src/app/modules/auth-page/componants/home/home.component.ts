import { AuthenticationService } from 'src/app/services/authentication.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  user$=this.authservice.currentuser$;
  constructor(private  authservice:AuthenticationService ) { }

  ngOnInit(): void {
  }

}
