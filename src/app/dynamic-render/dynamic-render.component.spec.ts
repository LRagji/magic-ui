import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicRenderComponent } from './dynamic-render.component';

describe('DynamicRenderComponent', () => {
  let component: DynamicRenderComponent;
  let fixture: ComponentFixture<DynamicRenderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicRenderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicRenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
