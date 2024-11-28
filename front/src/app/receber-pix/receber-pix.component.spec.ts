import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceberPixComponent } from './receber-pix.component';

describe('ReceberPixComponent', () => {
  let component: ReceberPixComponent;
  let fixture: ComponentFixture<ReceberPixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReceberPixComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReceberPixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
