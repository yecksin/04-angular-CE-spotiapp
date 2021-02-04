import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styleUrls: ['./artista.component.scss']
})
export class ArtistaComponent implements OnInit {
artista:any ={};
topTracks:any[]=[];
loading = true;
  constructor(private routerActive:ActivatedRoute, private spotify:SpotifyService) { 
    
    this.routerActive.params.subscribe(params=>{
      this.getArtista(params['id']);
      this.getTopTracks(params['id']);
     
    })
  }

  getArtista(id:string){
    this.spotify.getArtista(id).subscribe(resp=>{
      console.log(resp);
      this.artista = resp;
      this.loading = false;
    })
  }

  getTopTracks(id:string){
    this.spotify.getTopTracks(id).subscribe(resp=>{
      console.log(resp);
      this.topTracks = resp;
      this.loading = false;
    })
  }

  ngOnInit(): void {
  }

}
