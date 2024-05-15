import { Component } from '@angular/core';

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
  styleUrl: './card.component.scss'
})
export class CardComponent {
  // @ts-ignore
  plano : Iplano = {
    infos: {
      tipo: 'Simples',
      preco: 100,
    }
  }
}
