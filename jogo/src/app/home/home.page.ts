import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  n: number = 0;
  x: number;
  res = '';
  tentativas: number = 0;

  constructor() {
    this.x = Math.floor(Math.random() * 100) + 1;
  }

  arriscar() {
    if (this.n > this.x) {
      this.res = 'Errou... Está mais pra baixo ;-)';
      this.tentativas += 1
    } else if (this.n < this.x) {
      this.res = 'Errou... Está mais pra cima ;-)';
      this.tentativas += 1
    } else {
      this.res = 'ACERTOU!!!!';
      this.tentativas += 1
    }
  }
}
