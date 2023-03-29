import { Component, OnInit } from '@angular/core';
import { IHero } from 'src/app/interfaces/hero.interface';

@Component({
  selector: 'app-list-hero',
  templateUrl: './list-hero.component.html',
  styleUrls: ['./list-hero.component.scss'],
})
export class ListHeroComponent implements OnInit {
  listHeroes!: IHero[];
  chosenHero!: IHero;

  constructor() {
    this.getListHeroes();
  }

  ngOnInit(): void {}

  getListHeroes() {
    this.listHeroes = [
      { id: 11, name: 'Dr Nice' },
      { id: 12, name: 'necromancer' },
      { id: 13, name: 'Bombasto' },
      { id: 14, name: 'Celeritas' },
      { id: 15, name: 'Magneta' },
      { id: 16, name: 'RubberMan' },
      { id: 17, name: 'Dynama' },
      { id: 18, name: 'Dr IQ' },
      { id: 19, name: 'Magma' },
      { id: 20, name: 'Tornado' },
    ];
    console.log(this.listHeroes);
    
  }

  selectHero(hero: IHero) {
    this.chosenHero = hero;
  }
}
