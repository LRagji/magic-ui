import { Component, OnInit, ViewChild } from '@angular/core';
import { ElementsRepoService, magicElement } from '../elements-repo.service';

export class Tile {
  color: string;
  _cols: number;
  rows: number;
  index: number;
  content: string;
  colsChangedCallback: (v) => {};

  constructor(rows, index, content, cols, color, colsChangedCallback) {
    this.rows = rows;
    this._cols = cols;
    this.index = index;
    this.content = content;
    this.color = color;
    this.colsChangedCallback = colsChangedCallback
  }

  set cols(value: number) {
    this.colsChangedCallback(value);
    this._cols = value;
  }

  get cols() {
    return this._cols;
  }
}



@Component({
  selector: 'app-custom-component',
  templateUrl: './custom-component.component.html',
  styleUrls: ['./custom-component.component.css']
})
export class CustomComponentComponent implements OnInit {

  @ViewChild('sidenav', { static: true }) sidenav;
  private _selectedTile: Tile;
  private _basicElements: Array<magicElement>;
  private _tiles: Array<Tile>;
  private _layout = {
    "columns": { "value": 12, "min": 6, "max": 30, placeHolder: () => `Total Column:[${this._layout.columns.min}-${this._layout.columns.max}]` },
    "gutter": { "value": 2, "min": 1, "max": 10, placeHolder: () => `Gutter size:[${this._layout.gutter.min}-${this._layout.gutter.max}] pixels` }
  };


  constructor(private _elementRepo: ElementsRepoService) {
    this.tileWidthChanged = this.tileWidthChanged.bind(this);

    this._tiles = [new Tile(1, 0, "", 6, undefined, this.tileWidthChanged),
    new Tile(1, 1, "", 6, undefined, this.tileWidthChanged)];

    this._selectedTile = this._tiles[0];
  }

  async ngOnInit() {
    this._basicElements = await this._elementRepo.getAllElements();
  }

  async addElement(instance: any) {
    this.sidenav.toggle();
    const markup = await instance.template(instance.defaultProperties, () => '');
    this._selectedTile.content = markup;
  }

  configureTile(tileIndex: number) {
    this.sidenav.toggle();
    this._selectedTile.color = undefined;
    this._selectedTile = this._tiles.find(t => t.index === tileIndex);
    this._selectedTile.color = "lightblue";
  }

  addTile() {
    this._tiles.push(new Tile(1, this._tiles.length, "", 6, undefined, this.tileWidthChanged));
  }

  deletetTile() {
    if (this._tiles.length <= 1) return;
    this.sidenav.toggle();
    this._tiles.splice(this._selectedTile.index, 1);
    this._selectedTile = this._tiles[0];
  }

  tileWidthChanged(width: number) {
    const largestWidth = this._tiles.reduce((acc, tile) => tile.cols > acc ? tile.cols : acc, width);
    if (this._layout.columns.min < largestWidth) {
      this._layout.columns.min = largestWidth;
    }
  }
}
