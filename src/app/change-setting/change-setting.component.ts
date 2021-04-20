import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
import {HttpClient} from '@angular/common/http'

@Component({
  selector: 'app-change-setting',
  templateUrl: './change-setting.component.html',
  styleUrls: ['./change-setting.component.css']
})
export class ChangeSettingComponent implements OnInit {

  constructor(private route:ActivatedRoute ,private http:HttpClient) { }
  ngOnInit(): void {
    for ( var i = 0, len = localStorage.length; i < len; ++i ) {
      if(localStorage.key(i)!="country" && localStorage.key(i)!="show"){
      this.keyData.push(localStorage.key(i));
      }
    }
    this.defaultValue=localStorage.getItem("country");
  }
  count="country";
  number=localStorage.length;
  keyData = [] as  any
  valueData=[] as any;
  defaultValue;
  onsetItem(value){
  window.localStorage.setItem(value,"");
  console.log("updated");
  }
  onDelete(value){
   localStorage.removeItem(value);
 }
onsetDefault(value){
  window.localStorage.setItem("country",value);
}
onCelsius(){
  window.localStorage.setItem("show","yes");
}
onFahrenheit(){
  window.localStorage.setItem("show","no");
}
}
