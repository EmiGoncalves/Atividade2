import { Component } from '@angular/core';

@Component({
  selector: 'app-apolice',
  standalone: false,
  templateUrl: './apolice.html',
  styleUrl: './apolice.css'
})
export class Apolice {
  sexo: string = "";
  idade: number = 0;
  valor: number = 0;

  

  calcularApolice(sexo: string, idade: number, valor: number): number {
    if (sexo === "Masculino" && idade <= 25) {
      return valor * 0.15;
    } else if (sexo === "Masculino" && idade > 25) {
      return valor * 0.10;
    } else if (sexo === "Feminino") {
      return valor * 0.08;
    }
    return 0;
  }

  resultado(): void {

  this.calcularApolice;
}
}