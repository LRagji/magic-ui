import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  content = '<h1>\n  I am content from the server, just normal HTML\n</h1>\n <button mat-raised-button color="primary">Primary</button>';
  constructor() { }

  ngOnInit() {
  }

}
