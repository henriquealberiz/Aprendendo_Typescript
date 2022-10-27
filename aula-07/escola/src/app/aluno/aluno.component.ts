import { Component, Input, OnInit } from '@angular/core';
import { Aluno } from './aluno.model';
//decorator que adiciona caracteristicas, sempre com @ antes.
@Component({
  selector: 'esc-aluno',
  templateUrl: './aluno.component.html'
})
export class AlunoComponent implements OnInit {
  //objeto
  @Input() aluno!: Aluno; // ! aguarda um valor para a variavel
  
 
  constructor() { }

  ngOnInit(): void {
  }
  fazerRequerimento(){
    console.log('Requerimento recebido!');
  }
}
