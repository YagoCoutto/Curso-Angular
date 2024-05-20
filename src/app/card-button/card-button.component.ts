import { Component, EventEmitter, Output, output } from '@angular/core';

@Component({
  selector: 'app-card-button',
  templateUrl: './card-button.component.html',
  standalone: false,
  styleUrl: './card-button.component.scss'
})
export class CardButtonComponent {
  produto: string = 'Geladeira Inox'

  @Output('buttonClick') buttonClickEmitter = new EventEmitter<string>();
  
  onButtonClick() {
    console.log('testtttttt')

    this.buttonClickEmitter.emit(this.produto);
  }
}
