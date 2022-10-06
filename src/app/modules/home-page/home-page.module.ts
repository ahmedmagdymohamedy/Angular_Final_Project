import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page.component';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Component, OnInit } from '@angular/core';


@NgModule({
  declarations: [
    HomePageComponent
  ],
  imports: [
    CommonModule
  ]
})





export class HomePageModule implements OnInit {

  user$=this.authservice.currentuser$;
  constructor(private  authservice:AuthenticationService ) { }

  ngOnInit(): void {
  }

}