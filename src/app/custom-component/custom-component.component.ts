import { Component, OnInit, ViewChild } from '@angular/core';
import { ElementsRepoService, magicElement } from '../elements-repo.service';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
  index: number;
  content: string;
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

  constructor(private _elementRepo: ElementsRepoService) {
    this._tiles = [{ index: 0, text: 'One', cols: 6, rows: 3, color: 'lightblue', content: '' },
    { index: 1, text: 'Two', cols: 6, rows: 3, color: 'lightblue', content: '' }];

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
    this._selectedTile = this._tiles[tileIndex];
  }

  addTile() {
    this._tiles.push({ index: this._tiles.length, text: 'One', cols: 6, rows: 3, color: 'lightblue', content: '' })
  }

  deletetTile()
  {
    this.sidenav.toggle();
    this._tiles.splice(this._selectedTile.index,1);
    this._selectedTile = this._tiles[0];
  }
}
