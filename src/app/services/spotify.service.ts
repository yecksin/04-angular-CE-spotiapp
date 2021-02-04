import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {

  }
  getQuery(query: string) {
    const headers = new HttpHeaders({
      Authorization: 'Bearer BQBuPodbqMr2Tfs-lBDAM281l4N6OjhuKox30z_DhrJ-R5MJgcfZhnNXTekTmNedaY7Cs20W-xc2Brq3D7w'
    })
    const url = `https://api.spotify.com/v1/${query}`;
    return this.http.get(url, { headers });
  }
  getNewReleases() {
    return this.getQuery('browse/new-releases').pipe(map((data: any) => { return data.albums.items }));
  }

  getArtistas(termino: string) {
    return this.getQuery(`search?q=${termino}&type=artist&limit=15`).pipe(map((data: any) => { return data.artists.items }));
  }
  getArtista(id:string){
    return this.getQuery(`artists/${id}`).pipe(map((data: any) => { return data}));
  }
  getTopTracks(id:string){
    return this.getQuery(`artists/${id}/top-tracks?market=ES`)
    .pipe(map((data: any) => { return data.tracks}));
  }

  
}
