import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class HeroListComponent {
  public heroNames: string[] = ['Ironman', 'Spiderman', 'Hulk', 'Thor', 'Captain America'];

  public removeLastHero(): void {
    this.nameLastHeroRemoved = this.heroNames.pop();
  }

  public resetHeros(): void {
    this.heroNames = ['Ironman', 'Spiderman', 'Hulk', 'Thor', 'Captain America'];
    this.nameLastHeroRemoved = undefined;
  }

  public nameLastHeroRemoved?: string;
}
