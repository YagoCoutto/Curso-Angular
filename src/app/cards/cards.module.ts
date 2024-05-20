import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../card/card.component';
import { CardRoxoComponent } from '../card-roxo/card-roxo.component';
import { CardButtonComponent } from '../card-button/card-button.component';
import { CardButtonCancelComponent } from '../card-button-cancel/card-button-cancel.component';
import {MatSliderModule} from '@angular/material/slider';
import { CardMainComponent } from '../card-main/card-main.component';


@NgModule({
  declarations: [
    CardComponent,
    CardRoxoComponent,
    CardButtonComponent,
    CardButtonCancelComponent,
    CardMainComponent,

    
  ],
  imports: [
    CommonModule,
    MatSliderModule
  ],
  exports:[
    CardComponent,
    CardRoxoComponent,
    CardButtonComponent,
    CardMainComponent,

  ]
})
export class CardsModule { }
