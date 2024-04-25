import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonpageComponent } from './pokemonpage.component';

describe('PokemonpageComponent', () => {
  let component: PokemonpageComponent;
  let fixture: ComponentFixture<PokemonpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PokemonpageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PokemonpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
