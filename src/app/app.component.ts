import { Component, OnInit } from '@angular/core';
import { POKEMONS } from "./mock-pokemon-list";
import { Pokemon } from './pokemon';


// The template is equivalent to the view. Here, we have targeted another file, 'app.component.html', to ensure that we never put logic inside the view by separating them.
@Component({
  selector: 'app-root',
  templateUrl:  'app.component.html'

})

// class is equal to model 
export class AppComponent implements OnInit{

  pokemonList: Pokemon[] = POKEMONS;

  ngOnInit(){
    console.table(this.pokemonList);
  }

  selectPokemon(event: MouseEvent){
    const index: number = +(event.target as HTMLInputElement).value
    console.log(`Vous avez cliqué sur le pokemon ${this.pokemonList[index].name}`);
  }

}
