import { Component } from '@angular/core';
import { Character } from '../../interfaces/character.interface';
import { DbzService } from '../../services/dbz-service';

@Component({
  selector: 'dbz-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent {

  // Las inyecciones de dependencias se hacen en el constructor y preferentemente se hacen con variables privadas
  constructor(private dbzService : DbzService) {}

  public get characters(): Character[] {
    return [...this.dbzService.characters];
  }

  public onAddCharacter(caracter: Character): void {
    this.unSelectAllCharacters();
    caracter.selected =true;

    this.dbzService.addCharacter(caracter);
  }

  public onDeleteCharacter(id: string): void {
    const index = this.dbzService.characters.findIndex((c) => c.id === id);
    if (this.dbzService.characters[index].selected) this.unSelectAllCharacters();

    this.dbzService.deleteCharacter(id);
  }

  private unSelectAllCharacters(): void {
    this.dbzService.characters.forEach((c) => {
      c.selected = false;
    });
  }
}
