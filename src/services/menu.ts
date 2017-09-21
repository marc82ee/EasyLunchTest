import { Dish } from "../data/dish.interface";

export class MenuService {
  private menuDishes: Dish[] = [];

  addSelectedDish(dish: Dish){
    this.menuDishes.push(dish);
    console.log(this.menuDishes);
  }

  removeSelectedDish(dish: Dish) {
    const position = this.menuDishes.findIndex((dishEl: Dish) => {
      return dishEl.id == dish.id;
    });
    this.menuDishes.splice(position, 1);
  }
 
  getSelectedDishes() {
    return this.menuDishes.slice();
  }

  isDishSelected(dish: Dish) {
    return this.menuDishes.find((dishEl: Dish) => {
      return dishEl.id == dish.id;
    });
  }
 
}