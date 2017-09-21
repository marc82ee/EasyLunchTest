import { Component, OnInit } from '@angular/core';

import { AlertController } from "ionic-angular";
import { NavParams } from "ionic-angular";

import { Dish } from "../../data/dish.interface";
import { MenuService } from "../../services/menu";

@Component({
  selector: 'page-dishes',
  templateUrl: 'dishes.html'
})
export class DishesPage implements OnInit {
  dishGroup: {category: string, dishes:Dish[], icon: string};

  constructor(
    private navParams: NavParams,
    private alertCtrl: AlertController,
    private menuService: MenuService) {}

  ngOnInit() {
    this.dishGroup = this.navParams.data;
  }

  onSelectDish(selectedDish: Dish) {
    const alert = this.alertCtrl.create({
      title: 'Add dish',
      subTitle: 'Are you sure?',
      message: 'Are you sure you want to add this dish?',
      buttons: [
        {
          text: 'Yes, go ahead',
          handler: () => {
            this.menuService.addSelectedDish(selectedDish);
          }
        },
        {
          text: 'No, I changed my mind!',
          role: 'cancel',
          handler: () => {
            console.log('Cancelled!');
          }
        }
      ]
    });

    alert.present();
  }

  onRemoveDish(selectedDish: Dish){
    this.menuService.removeSelectedDish(selectedDish);
  }
  
  isDishSelected(selectedDish: Dish) {
    return this.menuService.isDishSelected(selectedDish);
  }

}