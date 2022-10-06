import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-my-header',
  templateUrl: './my-header.component.html',
  styleUrls: ['./my-header.component.scss']
})

  export class MyHeaderComponent implements OnInit {
    constructor(public authservice:AuthenticationService,
      private router:Router)
    {
  
    }
    ngOnInit(): void { }
    logout()
    {
      this.authservice.logout().subscribe(()=>{
  this.router.navigate([""]);
      });
    }
  
  }
