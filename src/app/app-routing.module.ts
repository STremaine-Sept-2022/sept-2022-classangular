import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BossDetailsComponent } from './boss-monsters/boss-details/boss-details.component';
import { BossListComponent } from './boss-monsters/boss-list/boss-list.component';
import { CharacterClassListComponent } from './character-class/character-class-list/character-class-list.component';
import { HomeComponent } from './core/home/home.component';
import { PageNotFoundComponent } from './core/page-not-found/page-not-found.component';
import { GreeterComponent } from './greeter/greeter.component';

const routes: Routes = [
  { path: 'home-component', component: HomeComponent },
  { path: 'boss-list', component: BossListComponent},
  { path: 'greeter',component: GreeterComponent},
  { path: 'boss-details/:index', component: BossDetailsComponent },
  { path: 'class-list', component:CharacterClassListComponent},
  { path: '', redirectTo: '/home-component', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
