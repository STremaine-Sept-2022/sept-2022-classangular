import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BossDetailsComponent } from './boss-details.component';

describe('BossDetailsComponent', () => {
  let component: BossDetailsComponent;
  let fixture: ComponentFixture<BossDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BossDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BossDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
