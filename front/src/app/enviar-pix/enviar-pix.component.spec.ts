import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnviarPixComponent } from './enviar-pix.component';

describe('EnviarPixComponent', () => {
  let component: EnviarPixComponent;
  let fixture: ComponentFixture<EnviarPixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EnviarPixComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnviarPixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
