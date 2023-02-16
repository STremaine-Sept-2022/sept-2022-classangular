import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { StringLiteralLike } from 'typescript';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title :string = 'AngApp_2022';
  headerText : string = "This is my cool new app!"
  components : string[] = [ "Character","Gear","Monster","Dungeon"]
  userName: string = ""

  changeTitle(newTitle :string):void{
    this.title = newTitle;    
    }

    addName(form:NgForm){
      let newName = form.form.value.name;
      this.components.push(newName);
    }

    addUserName(form:NgForm){
      let name = form.form.value.name;
      this.userName = `, ${name}`;
    }

  
}
