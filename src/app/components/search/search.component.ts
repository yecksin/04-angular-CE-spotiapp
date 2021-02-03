import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  artistas:any[]=[];
  constructor(
    private _spotify:SpotifyService
  ) { }

  ngOnInit(): void {
  }

  buscar(termino:string){
    console.log(termino);
    this._spotify.getArtista(termino).subscribe((resp:any)=>{
      console.log(resp);
      this.artistas = resp;
    })
  }

}
