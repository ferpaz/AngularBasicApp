import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <p>
      Counter: {{ counter }}
    </p>

    <button (click)="increment(1)">+1</button>
    <button (click)="reset()">Reset</button>
    <button (click)="decrement(1)">-1</button>
`
})
export class CounterComponent {
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
