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
  loading: boolean;
  error=false;
  mensajeError='';
  constructor(
    private http:HttpClient,
    private _spotifyService:SpotifyService
    ) { 
      this.loading = true;
    // console.log("http inicio");
    // this.http.get('https://restcountries.eu/rest/v2/lang/es').subscribe(resp=>{
    //   console.log(resp);
    // })
  }

  ngOnInit(): void {
    this._spotifyService.getNewReleases().subscribe((data:any)=>{
      setTimeout(() => {
        console.log(data);
        this.nuevasCanciones = data;
        this.loading = false;
      }, 1000);

    },(errorServicio)=>{
      this.error =true;
      this.loading = false;
      console.log(errorServicio);
      this.mensajeError = errorServicio.error.error.message;
    });
  }

}
