import { Component, OnInit } from '@angular/core';
import { CityWeatherService } from '../city-weather.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  city: string = '';
  cityWeather: object = {};


  constructor(private CityWS: CityWeatherService) { }

  ngOnInit(): void { }

  getCity(city: string) {
    this.city = city;
  }

  getCityWeather() {
    this.CityWS.getWeather().subscribe(vare => this.cityWeather = vare);//need to use a promise here so it won't console.log before the subscription
    console.log(this.cityWeather);
  }

}
