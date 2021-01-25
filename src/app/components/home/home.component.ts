import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private http:HttpClient) { 
    console.log("http inicio");
    this.http.get('https://restcountries.eu/rest/v2/lang/es').subscribe(resp=>{
      console.log(resp);
    })
  }

  ngOnInit(): void {
    
  }

}
