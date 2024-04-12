import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-components-form',
  templateUrl: './form.component.html',
})
export class FormComponent {

  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter<Character>();

  // Esta clase es para manejar el formulario
  public character: Character = {
    name: '',
    power: 0,
    selected: false
  };

  public emitCharacter(): void {
    if (this.character.name.trim().length === 0) return;

    this.onNewCharacter.emit(this.character);

    this.character = { name: '',  power: 0, selected: false };
  }
}
