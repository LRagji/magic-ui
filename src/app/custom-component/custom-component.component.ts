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
  basicElements: Array<magicElement>;
  
  tiles: Array<Tile> = [{ index: 0, text: 'One', cols: 6, rows: 3, color: 'lightblue', content: '' },
  { index: 1, text: 'Two', cols: 6, rows: 3, color: 'lightblue', content: '' }];

  constructor(private _elementRepo: ElementsRepoService) { }

  async ngOnInit() {
    this.basicElements = await this._elementRepo.getAllElements();
  }

  async addElement(instance: any) {
    this.sidenav.toggle();
    const markup = await instance.template(instance.defaultProperties, () => '');
    this._selectedTile.content = markup;
  }

  configureTile(tileIndex: number) {
    this.sidenav.toggle();
    this._selectedTile = this.tiles[tileIndex];
  }
}
