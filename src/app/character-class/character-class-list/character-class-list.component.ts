import { Component } from '@angular/core';
import { DndRepositoryService } from '../dnd-repository.service';

@Component({
  selector: 'app-character-class-list',
  templateUrl: './character-class-list.component.html',
  styleUrls: ['./character-class-list.component.css']
})
export class CharacterClassListComponent {

  constructor(private repositoryService: DndRepositoryService ){}

  characterClasses: any;

  ngOnInit(): void {
    this.repositoryService.getCharacterClasses().subscribe(
      (response) => {this.characterClasses = response;});
  }
}
