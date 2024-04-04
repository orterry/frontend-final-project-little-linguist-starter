import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WordMatchingGameComponent } from './word-matching-game.component';

describe('WordMatchingGameComponent', () => {
  let component: WordMatchingGameComponent;
  let fixture: ComponentFixture<WordMatchingGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WordMatchingGameComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WordMatchingGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
