import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  standalone: false,
  styleUrl: './card.component.scss'
})
export class CardComponent {
  plano = {
    infos: {
      tipo: 'Siples',
      preco: 'R$' + 100 + ',00/Mês'
    },
  }
}
