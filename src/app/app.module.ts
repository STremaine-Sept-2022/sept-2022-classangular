import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GreeterComponent } from './greeter/greeter.component';
import { BackStoryComponent } from './back-story/back-story.component';
import { DungeonComponent } from './dungeon/dungeon.component';
import { BossMonsterComponent } from './boss-monster/boss-monster.component';
import { BossMonstersModule } from './boss-monsters/boss-monsters.module';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [
    AppComponent,
    GreeterComponent,
    BackStoryComponent,
    DungeonComponent,
    BossMonsterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BossMonstersModule,
    CoreModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
