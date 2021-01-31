import { Component, OnInit } from '@angular/core';
import { HeroesService } from 'src/app/services/heroes.service';
import { Heroes } from '../../heroes';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: Heroes[] = [];

  constructor(private heroesService: HeroesService,
              private router: Router) { } 

  ngOnInit(): void {
    this.heroes = this.heroesService.getHeroes();
  }

  // tslint:disable-next-line: typedef
  verHeroes(idx: number) {
    this.router.navigate(['/heroe', idx]);
}

}
