import { Component } from '@angular/core';

@Component({
  selector: 'app-card-main',
  templateUrl: './card-main.component.html',
  styleUrl: './card-main.component.scss'
})
export class CardMainComponent {
  buttonClicked(produto: string){
    console.log('buttonclicked ' + produto)
  }
}
