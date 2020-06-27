import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class CityWeatherService {

  url = 'https://openweathermap.org/data/2.5/weather?q=Bucharest&appid=439d4b804bc8187953eb36d2a8c26a02';

  constructor(private http: HttpClient) { }

  getWeather() {
    return this.http.get(this.url);
  }

}