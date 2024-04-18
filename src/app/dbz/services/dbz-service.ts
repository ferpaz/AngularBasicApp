import { Injectable } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';

import { Character } from '../interfaces/character.interface';

@Injectable({
  // Lo configura como Singleton accesible para toda la aplicación
  providedIn: 'root'
})
export class DbzService {
  public characters: Character[] = [
    { id: uuidv4(), name: 'Goku', power: 15000, selected: true },
    { id: uuidv4(), name: 'Vegeta', power: 7500, selected: false },
    { id: uuidv4(), name: 'Krillin', power: 5000, selected: false},
    { id: uuidv4(), name: 'Piccolo', power: 8000, selected: false }
  ];

  public addCharacter(caracter: Character): void {
    console.log(caracter);

    // Se le asigna un id único al nuevo personaje
    caracter.id = uuidv4();

    // al hacer push se puso la notación que agrega una referencia a un objeto nuevo
    this.characters.push({...caracter});
  }

  public deleteCharacter(id: string): void {
    console.log('deleteCharacter', id);

    const index = this.characters.findIndex((c) => c.id === id);
    this.characters.splice(index, 1);
  }
}
