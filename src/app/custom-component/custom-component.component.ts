import { Component, OnInit } from '@angular/core';
import { ComponentInjectorService } from '../component-injector.service';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'app-custom-component',
  templateUrl: './custom-component.component.html',
  styleUrls: ['./custom-component.component.css']
})
export class CustomComponentComponent implements OnInit {

  constructor(private componentInjection: ComponentInjectorService) { }

  ngOnInit() {
  }

  loadData() {
    let container: HTMLElement = document.querySelector('#page-actions-container');
    let componentInstance = this.componentInjection.attach(container, MatButton);
    setTimeout(() => componentInstance.detach(), 2000);
  }

}
