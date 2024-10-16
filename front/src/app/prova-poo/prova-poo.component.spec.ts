import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProvaPooComponent } from './prova-poo.component';

describe('ProvaPooComponent', () => {
  let component: ProvaPooComponent;
  let fixture: ComponentFixture<ProvaPooComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProvaPooComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProvaPooComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
