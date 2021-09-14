import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListorganizationComponent } from './listorganization.component';

describe('ListorganizationComponent', () => {
  let component: ListorganizationComponent;
  let fixture: ComponentFixture<ListorganizationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListorganizationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListorganizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
