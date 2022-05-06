import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  activity:string = "";
  type: string=""; 
  partecipants: number =0; 
  price: number= 0; 
  link: string= ""; 

  constructor(private http: HttpClient){}
  genera(){
    this.http.get("https://www.boredapi.com/api/activity").subscribe(
      res => {
        this.activity = res["activity"]
        this.type = res["type"]
        this.partecipants= res["participants"]
        this.price= res["price"]
        this.link= res["link"]

      },
      error=> {
        console.log(error)
      }
    )
  }

}
