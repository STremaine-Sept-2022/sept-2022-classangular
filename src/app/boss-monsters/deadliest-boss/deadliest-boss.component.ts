import { Component } from '@angular/core';
import { BossRepositoryService } from '../boss-repository.service';
import { IBossMonster } from '../interfaces/boss';

@Component({
  selector: 'app-deadliest-boss',
  templateUrl: './deadliest-boss.component.html',
  styleUrls: ['./deadliest-boss.component.css']
})
export class DeadliestBossComponent {

  deadliestBoss: IBossMonster | undefined = undefined
  
  constructor(private bossRepo : BossRepositoryService) { }

  ngOnInit(): void { 
    this.deadliestBoss = this.bossRepo.getBossMonsters().reduce(
      function(c,v){return (c.healthPoints > v.healthPoints? c : v)}
    )
  }

}
