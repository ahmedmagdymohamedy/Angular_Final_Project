import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel-slide',
  templateUrl: './carousel-slide.component.html',
  styleUrls: ['./carousel-slide.component.scss'],
})
export class CarouselSlideComponent implements OnInit {
  constructor() {}
  @Input() props: any = {};
  ngOnInit(): void {}
}
