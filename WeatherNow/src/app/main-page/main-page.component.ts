import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  city: string = '';
  cityWeather = {
    temp: undefined,
    status: undefined,
  };
  cityUrl: string;


  constructor() { }

  ngOnInit(): void { }

  getCity(city: string) {
    this.city = city;
    this.cityUrl = 'https://openweathermap.org/data/2.5/weather?q=' + this.city + '&appid=439d4b804bc8187953eb36d2a8c26a02';
    console.log(this.cityUrl);

  }

  getCityWeather(url) {
    this.getWeather(url)
  }

  getWeather(url: string) {

    fetch(url).then(res => {
      if (res.ok) return res.json()
      else (alert("City name is wrong or server not working!"))
    })
      .then(data => {
        console.log(data)
        this.cityWeather.temp = Math.floor(data.main.temp);
        this.cityWeather.status = data.weather[0].description;
      })
      .catch(() => alert('City name is wrong!'));

  }

}
