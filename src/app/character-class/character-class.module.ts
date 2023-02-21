import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterClassListComponent } from './character-class-list/character-class-list.component';
import { CharacterClassDetailsComponent } from './character-class-details/character-class-details.component';



@NgModule({
  declarations: [
    CharacterClassListComponent,
    CharacterClassDetailsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CharacterClassListComponent
  ]
})
export class CharacterClassModule { }
