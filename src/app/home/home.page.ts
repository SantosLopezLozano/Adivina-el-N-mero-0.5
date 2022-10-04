import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  randomNumber:number = Math.floor(Math.random()*100) +1;
  number: number;
  mensaje:String;

  constructor() {}

  onTry(){
    if (this.number > this.randomNumber) {
      this.mensaje = "El número que ha dicho es mayor que el aleatorio"
    }
    else if (this.number < this.randomNumber) {
      this.mensaje = "El número que ha dicho es menor que el aleatorio"
    }
    else if (this.number == this.randomNumber){
      this.mensaje = "El número que ha dicho es correcto"
    } 
    else {
      this.mensaje = "El dato introducido es inválido o no se ha introducido nada"
    }
  }

  reset(){
    this.randomNumber = Math.floor(Math.random()*100) +1;
    this.number = 0
    this.mensaje = ""
  }

}
