import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-card-roxo',
  templateUrl: './card-roxo.component.html',
  standalone: false,
  styleUrl: './card-roxo.component.scss'
})
export class CardRoxoComponent {
  plano = {
    infos:{
      tipo: 'Completo',
      preco: 'R$' + 150 + ',00/Mês'
    }
  }
}
