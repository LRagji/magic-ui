import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  content = `<button (click)="loadData()" mat-raised-button color="primary">Primary</button>
    `;

  constructor() { }

  ngOnInit() {
  }

  loadData() {
    console.log("I am clicked");
   this.content=`Its clicked`;
  }
}
