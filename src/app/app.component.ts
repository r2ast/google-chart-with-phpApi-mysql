import {pipe} from 'rxjs';
import { Component } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //Declare variable to store API values
  cartkey = [];
  myType: any;
  myType1: any;
  myData:any;
  myOptions:any;
  title:any;

    
  constructor(private http: HttpClient) {
  
  this.http.get('http://localhost:8080/chartApi/mypage.php').subscribe((data:any) => {
  //Convert json to array  
    alert(JSON.stringify(data));
  this.cartkey = data.map(function(item:any) {
  //Merge array
  var mixarrayy = (Object.keys(item)).concat(Object.values(item));
  return mixarrayy;
  
  });
  setTimeout(() => {
    this.myType = 'PieChart';
    this.myType1 = 'ColumnChart';
  this.myData = this.cartkey;
  this.myOptions = {
  colors: ['#e0440e', '#e6693e', '#ec8f6e', '#f3b49f', '#f6c7b6'],
  is3D: true
  };
  }, 2500);
  });
  }
}
