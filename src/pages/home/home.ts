import { Component,OnInit } from '@angular/core';

import dishes from "../../data/menu";
import { Dish } from '../../data/dish.interface';
import { DishesPage } from "../dishes/dishes";


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit{

  menu: {category:string, dishes: Dish[], icon:string}[];
  dishesPage = DishesPage;

  ngOnInit(){
    this.menu = dishes;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuPage');
  }

}
