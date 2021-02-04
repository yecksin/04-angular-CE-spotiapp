import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styleUrls: ['./artista.component.scss']
})
export class ArtistaComponent implements OnInit {

  constructor(private routerActive:ActivatedRoute) { 
    this.routerActive.params.subscribe(params=>{
      console.log(params['id']);
    })
  }

  ngOnInit(): void {
  }

}
