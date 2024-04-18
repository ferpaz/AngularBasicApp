import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character, emptyCharacter } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-components-form',
  templateUrl: './form.component.html',
})
export class FormComponent {

  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter<Character>();

  // Esta clase es para manejar el formulario
  public character: Character = emptyCharacter();

  public emitCharacter(): void {
    if (this.character.name.trim().length === 0) return;

    this.onNewCharacter.emit(this.character);

    this.character = emptyCharacter();
  }
}
