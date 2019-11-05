import { Component, OnInit, ViewChild } from '@angular/core';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
  index: number;
  content: string;
}

export interface magicElement {
  name: string;
  markup: string;
}

@Component({
  selector: 'app-custom-component',
  templateUrl: './custom-component.component.html',
  styleUrls: ['./custom-component.component.css']
})
export class CustomComponentComponent implements OnInit {

  @ViewChild('sidenav', { static: true }) sidenav;
  private _selectedTile: Tile;
  basicElements: Array<magicElement> = [{name:"button",markup:'<button mat-raised-button color="primary">Basic</button>'},{name:"textbox",markup:""}]
  tiles: Array<Tile> = [{ index: 0, text: 'One', cols: 6, rows: 3, color: 'lightblue', content: '' },
  { index: 1, text: 'Two', cols: 6, rows: 3, color: 'lightblue', content: '' }];

  constructor() { }

  ngOnInit() {
  }

  addElement(elementMarkup: string) {
    this.sidenav.toggle()
    this._selectedTile.content = elementMarkup;
  }

  configureTile(tileIndex: number) {
    this.sidenav.toggle();
    this._selectedTile = this.tiles[tileIndex];
  }
}
