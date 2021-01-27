import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http:HttpClient) {
    
   }

   getNewReleases(){

     const headers = new HttpHeaders({
      Authorization: 'Bearer BQCsC31DNel2TBPBT5W-wGB7NeFiG2Qb4eSK268AY8NdBPttPplxOJhsBG9_z6YickuHVomiWB4gVuDhCzw'
     })

    return this.http.get('https://api.spotify.com/v1/browse/new-releases',{headers});
   }

   getArtista(termino:string){

    const headers = new HttpHeaders({
     Authorization: 'Bearer BQCsC31DNel2TBPBT5W-wGB7NeFiG2Qb4eSK268AY8NdBPttPplxOJhsBG9_z6YickuHVomiWB4gVuDhCzw'
    })

   return this.http.get(`https://api.spotify.com/v1/search?q=${termino}&type=artist&limit=15`,{headers});
  }
}
