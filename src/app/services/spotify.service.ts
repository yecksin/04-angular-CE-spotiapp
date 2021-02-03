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
      Authorization: 'Bearer BQCAauV6WJB2780w2YLsH99c1Lc3D3fk9CDhGnUxmgoUNYN1aiVTswVtNUG9zBSSIoIvemiHcmjvgDOWSig'
    })
    const url = `https://api.spotify.com/v1/${query}`;
    return this.http.get(url, { headers });
  }
  getNewReleases() {
    return this.getQuery('browse/new-releases').pipe(map((data: any) => { return data.albums.items }));
  }

  getArtista(termino: string) {
    return this.getQuery(`search?q=${termino}&type=artist&limit=15`).pipe(map((data: any) => { return data.artists.items }));
  }
}
