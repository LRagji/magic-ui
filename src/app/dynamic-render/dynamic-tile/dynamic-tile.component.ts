import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dynamic-tile',
  templateUrl: './dynamic-tile.component.html',
  styleUrls: ['./dynamic-tile.component.css']
})
export class DynamicTileComponent implements OnInit {

  @Input()
  content: string;

  @Output()
  configureTile = new EventEmitter();

  constructor() {
    this._raiseConfigureTile = this._raiseConfigureTile.bind(this);
  }

  ngOnInit() {
  }

  _raiseConfigureTile() {
    console.log("Hello");
    this.configureTile.emit();
  }

}
