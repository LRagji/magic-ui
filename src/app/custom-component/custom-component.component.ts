import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-component',
  templateUrl: './custom-component.component.html',
  styleUrls: ['./custom-component.component.css']
})
export class CustomComponentComponent implements OnInit {

  basicElements: Array<string> = ['Button', 'Slide', 'Slider']
  tiles: Array<any> = [{}];

  constructor() { }

  ngOnInit() {
  }

  addElement(elementName: String) {
    console.log(elementName);
  }
}
