import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IClass } from './interfaces/class';

@Injectable({
  providedIn: 'root'
})
export class DndRepositoryService {

  private apiUri = "https://www.dnd5eapi.co/api/classes";

  constructor(private http: HttpClient) { }

  getCharacterClasses() {
    return this.http.get(this.apiUri)
  }

  getClassDetails(index:string){
    let newUri = `${this.apiUri}/${index}`
    return this.http.get<IClass>(newUri)
  }

}
