import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dynamic-tile',
  templateUrl: './dynamic-tile.component.html',
  styleUrls: ['./dynamic-tile.component.css']
})
export class DynamicTileComponent implements OnInit {

  @Input()
  content: string;
  constructor() { }

  ngOnInit() {
  }

}
