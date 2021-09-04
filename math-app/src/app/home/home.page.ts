import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  n1 = 0
  n2 = 0
  resultado = ''

  constructor() {}

  soma() {
    this.resultado = `A soma entre ${this.n1} e ${this.n2} = ${this.n1 + this.n2}` 
  }

  subtracao() {
    this.resultado = `A subtracão entre ${this.n1} e ${this.n2} =${this.n1 - this.n2}` 
  }

  divisao() {
    this.resultado = `A divisão entre ${this.n1} e ${this.n2} = ${this.n1 / this.n2}` 
  }

  multiplicacao() {
    this.resultado = `A soma entre ${this.n1} e ${this.n2} é ${(this.n1 * this.n2)}` 
  }

  potencia() {
    this.resultado = `${this.n1} elevado a ${this.n2} = ${Math.pow(this.n1, this.n2)}` 
  }

}
