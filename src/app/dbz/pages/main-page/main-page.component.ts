import { Component } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent {
  public characters: Character[] = [
    { name: 'Goku', power: 15000, selected: true },
    { name: 'Vegeta', power: 7500, selected: false },
    { name: 'Krillin', power: 5000, selected: false},
    { name: 'Piccolo', power: 8000, selected: false }
  ];

  public addCharacter(caracter: Character): void {
    console.log(caracter);

    this.unSelectAllCharacters();

    caracter.selected =true;

    // al hacer push se puso la notación que agrega una referencia a un objeto nuevo
    this.characters.push({...caracter});
  }

  public deleteCharacter(index: number): void {
    console.log('deleteCharacter', index);

    this.unSelectAllCharacters();
    this.characters.splice(index, 1);
  }

  private unSelectAllCharacters(): void {
    this.characters.forEach((c) => {
      c.selected = false;
    });
  }

}
