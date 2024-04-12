import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from "../../interfaces/character.interface";

@Component({
  selector: 'dbz-components-list',
  templateUrl: './list.component.html'
})
export class ListComponent {

  @Output()
  public onDeleteCharacter: EventEmitter<number> = new EventEmitter<number>();

  // El decorador @Input permite que esta propiedad recibar un valor desde otro componente
  // cuando se referencia en el template de otro componente
  // ver src/app/dbz/pages/main-page/main-page.component.html

  @Input('CharacterList')
  public characterList: Character[] = [];

  public get selectedCharacter(): Character | null
  {
    return this.characterList.find((c) => c.selected) || null;
  }

  public selectCharacter(character: Character): void {
    this.characterList.forEach((c) => {
      c.selected = false;
    });
    character.selected = true;
  }

  public emitDeleteCharacter(index: number) {
    this.onDeleteCharacter.emit(index);
  }
}
