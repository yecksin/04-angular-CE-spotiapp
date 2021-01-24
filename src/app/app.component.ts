import { Component } from '@angular/core';
declare var mdc:any
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'spotiapp';
  constructor(){
    // mdc.ripple.MDCRipple.attachTo(document.querySelector('.foo-button'));
  }
}
