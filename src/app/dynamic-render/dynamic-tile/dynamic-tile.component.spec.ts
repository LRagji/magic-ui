import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicTileComponent } from './dynamic-tile.component';

describe('DynamicTileComponent', () => {
  let component: DynamicTileComponent;
  let fixture: ComponentFixture<DynamicTileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicTileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
