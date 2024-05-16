import { Component, ViewEncapsulation } from '@angular/core';

interface Iplano {
  infos: IInfos;
}

interface IInfos{
  tipo: string;
  preco: number;
}

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  standalone: false,
  styleUrl: './card.component.scss',
  encapsulation: ViewEncapsulation.None, /* ViewEncapsulation pouco usado e de dificil manutençao caso de erro, dica: NAO USAR */
})
export class CardComponent {
  // @ts-ignore
  plano : Iplano = {
    infos: {
      tipo: 'Simples',
      preco: 100,
    }
  }

  input: string = 'Teste loco'
  typeInput: string = 'Password'
  
  isDisable = true;
  enableInput (){
    this.isDisable = false;
  }
  disableInput(){
    this.isDisable = true;
  }

}
