import { AuthenticationService } from 'src/app/services/authentication.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  user = this.authService.currentuser$;
  constructor(private authService: AuthenticationService) {}

  objArr: {}[] = [
    {
      title: 'Mapple Wood Accent Chair',
      priceAfter: '199.00',
      priceBefore: '299.00',
      img: '../../../assets/1.png',
    },
    {
      title: 'Cloth Covered Accent Chair',
      priceAfter: '399.00',
      priceBefore: '499.00',
      img: '../../../assets/2.png',
    },
    {
      title: 'Valvet Accent Arm Chair',
      priceAfter: '299.00',
      priceBefore: '399.00',
      img: '../../../assets/3.png',
    },
  ];
  ngOnInit(): void {}
}
