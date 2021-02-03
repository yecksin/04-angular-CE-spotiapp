import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  artistas:any[]=[];
  loading: boolean = false;
  constructor(
    private _spotify:SpotifyService
  ) { }

  ngOnInit(): void {
  }

  buscar(termino:string){
    this.loading = true;
    console.log(termino);
    this._spotify.getArtista(termino).subscribe((resp:any)=>{
      setTimeout(() => {
        console.log(resp);
        this.artistas = resp;
        this.loading = false;
      }, 1000);

    })
  }

}
