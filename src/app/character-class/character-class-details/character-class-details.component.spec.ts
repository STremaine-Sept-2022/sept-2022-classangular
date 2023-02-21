import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterClassDetailsComponent } from './character-class-details.component';

describe('CharacterClassDetailsComponent', () => {
  let component: CharacterClassDetailsComponent;
  let fixture: ComponentFixture<CharacterClassDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharacterClassDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CharacterClassDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
