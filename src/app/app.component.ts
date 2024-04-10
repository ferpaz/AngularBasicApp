import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  public title: string = 'Primera App de Angular !!';

  public counter: number = 0;

  public increment(value: number): void {
    this.counter = this.counter + value;
  }

  public decrement(value: number): void {
    if ((this.counter - value) >= 0) this.counter = this.counter - value;
  }

  public reset(): void {
    this.counter = 0;
  }
}
