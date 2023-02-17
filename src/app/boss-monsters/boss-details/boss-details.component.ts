import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BossRepositoryService } from '../boss-repository.service';
import { IBossMonster } from '../interfaces/boss';

@Component({
  selector: 'app-boss-details',
  templateUrl: './boss-details.component.html',
  styleUrls: ['./boss-details.component.css']
})
export class BossDetailsComponent {

  name: string = ""
  weakness: string = ""
  index: number = -1;
  boss: IBossMonster | undefined = undefined
  constructor(private route: ActivatedRoute, private bossRepo : BossRepositoryService){}

  ngOnInit(): void {
    this.index = this.route.snapshot.params['index'];
    this.boss = this.bossRepo.getBossByIndex(this.index)   
    this.name = this.boss.name;
    this.weakness = this.boss.weakness

  }



  
  
 

}
