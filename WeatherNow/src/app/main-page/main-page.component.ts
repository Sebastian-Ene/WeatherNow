import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  inputCity: string = '';
  cityUrl: string;
  locationCity: string = '';

  cityWeather = {
    temp: undefined,
    status: undefined,
  };

  locationWeather = {
    temp: undefined,
    status: undefined,
  };

  constructor() { }

  ngOnInit(): void { }

  getCity(city: string) {
    this.inputCity = city;
    this.cityUrl = 'https://openweathermap.org/data/2.5/weather?q=' +
      this.inputCity + '&appid=439d4b804bc8187953eb36d2a8c26a02';
  }

  getWeather(url: string, location: boolean) {
    fetch(url).then(res => {
      if (res.ok) return res.json()
      else (alert("City name is wrong or server not working!"))
    })
      .then(data => {
        if (location) {
          this.locationWeather.temp = Math.floor(data.main.temp) - 273;
          this.locationWeather.status = data.weather[0].description;
          this.locationCity = data.name;
        }
        else {
          this.cityWeather.temp = Math.floor(data.main.temp);
          this.cityWeather.status = data.weather[0].description;
          this.inputCity = data.name;
        }
      })
      .catch(() => alert('City name is wrong!'));
  }

  getLocationWeather() {
    const p: any = new Promise((resolve, reject) => navigator.geolocation.getCurrentPosition(resolve, reject));
    p.then((position) => {
      let url = "http://api.openweathermap.org/data/2.5/weather?lat="
        + position.coords.latitude.toFixed(3).toString()
        + "&lon=" + position.coords.longitude.toFixed(3).toString()
        + "&APPID=6fe762d5379ae3f69aa71c8d5df46569";
      this.getWeather(url, true);
    }).catch((position) => console.log(position))
  }

}
