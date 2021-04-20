import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Router} from '@angular/router'

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  constructor(private http:HttpClient,private router:Router) { }
  keyData = [] as  any
  name;
  temp_c;
  temp_f;
  icon;
  pressure_in
  humidity
  show
  forecastavgtemp_c;forecasticon;forecastavgvis_km;forecastfeelslike_c;
  forecastavgtemp_c1;forecasticon1;forecastavgvis_km1;forecastfeelslike_c1;
  forecastavgtemp_c2;forecasticon2;forecastavgvis_km2;forecastfeelslike_c2;
  ngOnInit(): void {
    for ( var i = 0, len = localStorage.length; i < len; ++i ) {
      if(localStorage.key(i)!="country" && localStorage.key(i)!="show"){
      this.keyData.push(localStorage.key(i));
      }
    }
  }
  onClick(value){
    this.show=value;
    if(localStorage.getItem("show")=='yes'){
    this.getUserData().subscribe(data=>{
      console.log(data);
      this.name=data.location.name;
      this.icon=data.current.condition.icon;
      this.temp_c=data.current.temp_c+'C';
      this.pressure_in=data.current.pressure_in;
      this.humidity=data.current.humidity;
    })
      this.getForcostFirstData().subscribe(data=>{
      this.forecastavgtemp_c=data.forecast.forecastday[0].day.avgtemp_c;
      this.forecastavgvis_km=data.forecast.forecastday[0].day.avgvis_km;
      this.forecasticon=data.forecast.forecastday[0].day.condition.icon;
      this.forecastfeelslike_c=data.forecast.forecastday[0].hour[0].feelslike_c;
    })
      this.getForcostSecondData().subscribe(data=>{
      this.forecastavgtemp_c1=data.forecast.forecastday[1].day.avgtemp_c;
      this.forecastavgvis_km1=data.forecast.forecastday[1].day.avgvis_km;
      this.forecasticon1=data.forecast.forecastday[1].day.condition.icon;
      this.forecastfeelslike_c1=data.forecast.forecastday[1].hour[0].feelslike_c;
    })
    this.getForcostThirdData().subscribe(data=>{
      this.forecastavgtemp_c2=data.forecast.forecastday[2].day.avgtemp_czzzzzzzz;
      this.forecastavgvis_km2=data.forecast.forecastday[2].day.avgvis_km;
      this.forecasticon2=data.forecast.forecastday[2].day.condition.icon;
      this.forecastfeelslike_c2=data.forecast.forecastday[2].hour[0].feelslike_c;
    })
  }
  else{
    this.getUserData().subscribe(data=>{
      console.log(data);
      this.name=data.location.name;
      this.icon=data.current.condition.icon;
      this.temp_c=data.current.temp_f+'F';
      this.pressure_in=data.current.pressure_mb;
      this.humidity=data.current.humidity;
    })
      this.getForcostFirstData().subscribe(data=>{
      this.forecastavgtemp_c=data.forecast.forecastday[0].day.avgtemp_f;
      this.forecastavgvis_km=data.forecast.forecastday[0].day.avgvis_miles;
      this.forecasticon=data.forecast.forecastday[0].day.condition.icon;
      this.forecastfeelslike_c=data.forecast.forecastday[0].hour[0].feelslike_f;
    })
      this.getForcostSecondData().subscribe(data=>{
      this.forecastavgtemp_c1=data.forecast.forecastday[1].day.avgtemp_f;
      this.forecastavgvis_km1=data.forecast.forecastday[1].day.avgvis_miles;
      this.forecasticon1=data.forecast.forecastday[1].day.condition.icon;
      this.forecastfeelslike_c1=data.forecast.forecastday[1].hour[0].feelslike_f;
    })
    this.getForcostThirdData().subscribe(data=>{
      this.forecastavgtemp_c2=data.forecast.forecastday[2].day.avgtemp_f;
      this.forecastavgvis_km2=data.forecast.forecastday[2].day.avgvis_miles;
      this.forecasticon2=data.forecast.forecastday[2].day.condition.icon;
      this.forecastfeelslike_c2=data.forecast.forecastday[2].hour[0].feelslike_f;
    })
  }
}
  getUserData(){
    let url=`http://api.weatherapi.com/v1/current.json?key=%20edf8cb0a78e6415bbe481349211804&q=${this.show}&aqi=no`; 
    return this.http.get<any>(url);
 }
 getForcostFirstData(){
  let url=`http://api.weatherapi.com/v1/forecast.json?key=edf8cb0a78e6415bbe481349211804&q=${this.show}&days=3&aqi=no&alerts=no`; 
  return this.http.get<any>(url);
}
getForcostSecondData(){
  let url=`http://api.weatherapi.com/v1/forecast.json?key=edf8cb0a78e6415bbe481349211804&q=${this.show}&days=3&aqi=no&alerts=no`; 
  return this.http.get<any>(url);
}
getForcostThirdData(){
  let url=`http://api.weatherapi.com/v1/forecast.json?key=edf8cb0a78e6415bbe481349211804&q=${this.show}&days=3&aqi=no&alerts=no`; 
  return this.http.get<any>(url);
}
 changeSetting(){
  this.router.navigate(['/users']);
 }
}
