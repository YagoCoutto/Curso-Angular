import { Component } from '@angular/core';

interface Iplanos {
  infos: IInfos
}

interface IInfos {
  tipo: string,
  preco: number
}

@Component({
  selector: 'app-card-roxo',
  templateUrl: './card-roxo.component.html',
  standalone: false,
  styleUrl: './card-roxo.component.scss'
})
export class CardRoxoComponent {
  plano: Iplanos = {
    infos: {
      tipo: 'Completo',
      preco: 150
    }
  }
}
