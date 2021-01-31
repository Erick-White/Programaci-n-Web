import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { __param } from 'tslib';
import { HeroesService } from '../../services/heroes.service';
import { Heroes } from '../../heroes';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit {
  heroes: any[] = [];
  termino: string;

  constructor(private activateRoute: ActivatedRoute,
              private heroesServices: HeroesService) { }

  ngOnInit(): void {

    this.activateRoute.params.subscribe(params => {
      this.termino = params['termino']
      this.heroes = this.heroesServices.buscarHeroe(params['termino']);
      console.log(params.termino);
    });
  }

}
