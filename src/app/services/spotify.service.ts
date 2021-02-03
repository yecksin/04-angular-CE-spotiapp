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
      Authorization: 'Bearer BQAOqv0UGG83CSpS4F_YVtOGt1al8yyVmlXzHq2AoCXEdnhJA6mTiAVV9txFmMxrLqpADhryKyFaolzc2DE'
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
