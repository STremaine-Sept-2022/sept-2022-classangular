import { Component, Input, OnInit } from '@angular/core';
import { DndRepositoryService } from '../dnd-repository.service';
import { IClass } from '../interfaces/class';

@Component({
  selector: 'app-character-class-details',
  templateUrl: './character-class-details.component.html',
  styleUrls: ['./character-class-details.component.css']
})
export class CharacterClassDetailsComponent {
  @Input() index: string = "N/A";
  classDetails: IClass | undefined;

  constructor(private repo:DndRepositoryService) { }

  ngOnInit(): void {
    this.repo.getClassDetails(this.index).subscribe(
      (response) => {this.classDetails = response;});
  }
}
