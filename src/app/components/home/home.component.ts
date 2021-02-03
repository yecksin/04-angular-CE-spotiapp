import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  nuevasCanciones:any[]=[];
  constructor(
    private http:HttpClient,
    private _spotifyService:SpotifyService
    ) { 
    // console.log("http inicio");
    // this.http.get('https://restcountries.eu/rest/v2/lang/es').subscribe(resp=>{
    //   console.log(resp);
    // })
  }

  ngOnInit(): void {
    this._spotifyService.getNewReleases().subscribe((data:any)=>{
      console.log(data);
      this.nuevasCanciones = data;
    });
  }

}
