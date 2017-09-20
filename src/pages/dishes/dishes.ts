import { Component, OnInit } from '@angular/core';

//import { AlertController } from "ionic-angular";
import { NavParams } from "ionic-angular";

import { Dish } from "../../data/dish.interface";
//import { MenuService } from "../../services/menu";

@Component({
  selector: 'page-dishes',
  templateUrl: 'dishes.html'
})
export class DishesPage implements OnInit {
  dishGroup: {category: string, dishes:Dish[], icon: string};

  constructor(
    private navParams: NavParams,
    /*private alertCtrl: AlertController,
  private menuService: MenuService*/) {}

  ngOnInit() {
    this.dishGroup = this.navParams.data;
  }

}