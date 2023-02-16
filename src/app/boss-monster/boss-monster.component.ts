import { Component } from '@angular/core';

@Component({
  selector: 'app-boss-monster',
  templateUrl: './boss-monster.component.html',
  styleUrls: ['./boss-monster.component.css']
})
export class BossMonsterComponent {
  hitPoints: number = 10;
  weakness: string = "happiness";
  mainAttack: string = "dad jokes";
}
