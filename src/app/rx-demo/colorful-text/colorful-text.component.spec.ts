import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorfulTextComponent } from './colorful-text.component';

describe('ColorfulTextComponent', () => {
  let component: ColorfulTextComponent;
  let fixture: ComponentFixture<ColorfulTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColorfulTextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorfulTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
