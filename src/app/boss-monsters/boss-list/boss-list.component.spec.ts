import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BossListComponent } from './boss-list.component';

describe('BossListComponent', () => {
  let component: BossListComponent;
  let fixture: ComponentFixture<BossListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BossListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BossListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
