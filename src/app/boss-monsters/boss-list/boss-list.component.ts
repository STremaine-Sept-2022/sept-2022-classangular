import { Component } from '@angular/core';
import { BossRepositoryService } from '../boss-repository.service';
import { IBossMonster } from '../interfaces/boss';

@Component({
  selector: 'app-boss-list',
  templateUrl: './boss-list.component.html',
  styleUrls: ['./boss-list.component.css']
})
export class BossListComponent {

  bossMonsters: IBossMonster[] = [];

  constructor(private bossRepo: BossRepositoryService) { }

  ngOnInit(): void {
    this.bossMonsters = this.bossRepo.getBossMonsters();
  }

  
}
