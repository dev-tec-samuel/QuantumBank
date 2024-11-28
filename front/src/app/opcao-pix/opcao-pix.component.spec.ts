import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpcaoPixComponent } from './opcao-pix.component';

describe('OpcaoPixComponent', () => {
  let component: OpcaoPixComponent;
  let fixture: ComponentFixture<OpcaoPixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OpcaoPixComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OpcaoPixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
