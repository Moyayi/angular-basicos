import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit{

  heroes:string[] = ['Thor','Spiderman','Hulk','Loki','Ironman']
  heroesBorrado:string[] = [];

  borrarHeroe():void{

/*
  En el caso de que fuera uno a uno, tendría que haber utilizado
  el ternario aprendido ejemplo

  heroeBorrado:string = ''

  borrarHeroe():void{
    const heroeBorrado = this.heroe.shift() || '';
  }

  Esto lo que haría es decirnos que si no hay más heroes que
  borrar lo dejaríamos vacio por lo tanto no se añadería 
  nada más a dicha variable es decir se quedaría vacia.

*/
    if(this.heroes.length !== 0){
      this.heroesBorrado.push(this.heroes[0]);
      this.heroes.shift();
    }
  }

  constructor() {
    console.log("Constructor")
  }

  ngOnInit(): void {
    
    console.log("ngOnInit")
  }
}
