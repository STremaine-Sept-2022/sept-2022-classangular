import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-dungeon',
  templateUrl: './dungeon.component.html',
  styleUrls: ['./dungeon.component.css']
})
export class DungeonComponent {

  dungeonName:string ="Narnia";
  monsters:string[] = ["Joker", "Dracula", "Cassly"]
  difficulty: string = "high"
  treasure: number = 0
  showBoss: boolean = false;
  buttonText: string = "Show";

  toggleInfo(): void {
    this.showBoss = !this.showBoss;
    if(this.showBoss) {
      this.buttonText = "Hide Boss Info";
    }
    else
    {
      this.buttonText = "Show Boss Info"
    }   
  }

  changeDungeonName(form:NgForm){
    let dungeon = form.form.value.dungeon;
    this.dungeonName = dungeon;
  }

}
