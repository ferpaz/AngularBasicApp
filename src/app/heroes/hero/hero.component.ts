import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  public name: string = 'ironman';
  public age: number = 45;
  public city: string = 'New York';
  public realname: string = 'Tony Stark';

  get isNameUpperCase(): boolean {
    return this.name === this.name.toUpperCase();
  }

  public ToString(): string {
    return `Name: ${this.name}, Age: ${this.age}, City: ${this.city}, Real Name: ${this.realname}`;
  }

  public changeNameCase(): void {
    if (this.name.substring(0, 1) === this.name.substring(0, 1).toUpperCase()) {
      this.name = this.name.toLowerCase();
        }
    else {
      this.name = this.name.toUpperCase();
    }
  }

  public capitalizeName(): void {
    this.name = this.name.charAt(0).toUpperCase() + this.name.slice(1).toLowerCase();
  }

  public changeAge(newage: number): void {
    this.age = newage;
  }
}
