import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-greeter',
  templateUrl: './greeter.component.html',
  styleUrls: ['./greeter.component.css']
})
export class GreeterComponent {
 @Input() greeter : string = "Frank"
 @Input() favoriteNumber : number = 3

 showStory: boolean = false;
 buttonText: string = "Show";
 weapons: string[] = ["dagger","bOw","Quiver of aRRows"];

 goldAmount: number = 100;
 healthPercent: number = .75;


 toggleStory(): void{
  this.showStory = !this.showStory;
  if (this.showStory) {
    this.buttonText = "Hide";
  }
  else
  {
    this.buttonText = "Show";
  }
}


}
