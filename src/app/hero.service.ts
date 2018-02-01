import { Hero } from './hero'
import { Injectable } from '@angular/core'
import { HEROES } from './mock-heroes'



@Injectable()

export class HeroService {


    getHeroes(): Promise<Hero[]> {
        return Promise.resolve(HEROES);
    }


    getHero(id: number) : Promise<Hero> {
 
        return this.getHeroes()
                    .then(heroes => heroes.find(hero => hero.id === id))
    }

  

    getHeroesSlowly(): Promise<Hero[]>{
        return new Promise(resolve =>{
            setTimeout(() => resolve(this.getHeroes()), 2000)
        })
    }
}