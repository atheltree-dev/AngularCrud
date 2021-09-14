import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddeditorganizationComponent } from './addeditorganization.component';

describe('AddeditorganizationComponent', () => {
  let component: AddeditorganizationComponent;
  let fixture: ComponentFixture<AddeditorganizationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddeditorganizationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddeditorganizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
