# Spotiapp

https://beta.developer.spotify.com/console/

luego a dashboard

# Peticiones http

para probar
https://restcountries.eu/

## en el app.module.app

import { HttpClientModule} from '@angular/common/http'

  imports: [
    HttpClientModule
  ],

## en el componente 

  import { HttpClient } from '@angular/common/http';
 
    constructor(private http:HttpClient) { 
        console.log("http inicio");
        this.http.get('https://restcountries.eu/rest/v2/lang/es').subscribe(resp=>{
        console.log(resp);
        })
    }