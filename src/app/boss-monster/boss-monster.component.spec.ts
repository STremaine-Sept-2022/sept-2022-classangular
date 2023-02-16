import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BossMonsterComponent } from './boss-monster.component';

describe('BossMonsterComponent', () => {
  let component: BossMonsterComponent;
  let fixture: ComponentFixture<BossMonsterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BossMonsterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BossMonsterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
