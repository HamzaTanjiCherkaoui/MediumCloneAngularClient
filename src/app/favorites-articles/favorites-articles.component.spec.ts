import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoritesArticlesComponent } from './favorites-articles.component';

describe('FavoritesArticlesComponent', () => {
  let component: FavoritesArticlesComponent;
  let fixture: ComponentFixture<FavoritesArticlesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavoritesArticlesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoritesArticlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
