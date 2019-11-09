import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface magicElement {
  displayName: string;
  id: string;
  instance: object;
}

@Injectable({
  providedIn: 'root'
})
export class ElementsRepoService {

  private _elements: Set<magicElement> = new Set<magicElement>();
  constructor(private _network: HttpClient) {
    this.loadElements = this.loadElements.bind(this);
    this.getAllElements = this.getAllElements.bind(this);

    this._elements.add({ displayName: "button", id: "mat_button", instance: null });
  }

  private async loadElements(): Promise<any> {
    const elements=Array.from(this._elements);
    for (let index = 0; index < elements.length; index++) {
      const element = elements[index];
      let elementClassFile = await this._network.get("", { responseType: 'text' }).toPromise();
      elementClassFile += "\r\n return new " + element.id + "();";
      element.instance = new Function(elementClassFile)();
    }
  }

  async getAllElements(): Promise<Array<magicElement>> {
    await this.loadElements();
    return Array.from(this._elements);
  }
}
