import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  content = `<h1>
    I am content from the server, just normal HTML
    </h1>
  
        <button mat-icon-button aria-label="Hide">
            <mat-icon>backspace</mat-icon>
          </button>
    `;

  constructor() { }

  ngOnInit() {
  }

}
