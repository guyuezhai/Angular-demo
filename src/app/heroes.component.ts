import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'

import { Hero } from './hero'
import { HeroService } from './hero.service'

import {
    trigger,
    state,
    style,
    animate,
    transition
} from '@angular/animations'

@Component({
    
    selector: 'my-heroes',
    templateUrl: "./heroes.component.html",
    styleUrls: ['./heroes.component.css'],
    animations: [
        trigger('heroState', [
          state('inactive', style({transform: 'translateX(0) scale(1)'})),
          state('active',   style({transform: 'translateX(0) scale(1.1)'})),
          transition('inactive => active', animate('100ms ease-in')),
          transition('active => inactive', animate('100ms ease-out')),
          transition('void => inactive', [
            style({transform: 'translateX(-100%) scale(1)'}),
            animate(100)
          ]),
      
          transition('void => active', [
            style({transform: 'translateX(0) scale(0)'}),
            animate(200)
          ]),
        
        ])
      ]
      
})

export class HeroesComponent implements OnInit {
    heroes: Hero[];
    selectedHero: Hero;
  
    constructor(
        private router: Router,
        private heroService: HeroService
    ){}

    getHeroes(): void {
        this.heroService.getHeroes().then(heroes => this.heroes = heroes)
    }

    ngOnInit(): void {
        this.getHeroes()
    }

    onSelect(hero: Hero): void {
        this.selectedHero = hero;
        hero.state = hero.state === 'inactive'?'active':'inactive';
      
    }

    toggleState(){

        //this.state = this.state === 'active'? 'inactive': 'active';
    }
    gotoDetail(): void {
        this.router.navigate(['./detail', this.selectedHero.id])
    }

   
}