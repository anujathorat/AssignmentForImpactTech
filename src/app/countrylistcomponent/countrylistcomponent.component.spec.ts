import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountrylistcomponentComponent } from './countrylistcomponent.component';

describe('CountrylistcomponentComponent', () => {
  let component: CountrylistcomponentComponent;
  let fixture: ComponentFixture<CountrylistcomponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountrylistcomponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountrylistcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
