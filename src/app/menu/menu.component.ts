import { Component, OnInit } from '@angular/core';
import { DISHES } from '../shared/dishes';
import { Dish } from '../shared/dish';
import { DishService } from '../services/dish.service'

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
  
export class MenuComponent implements OnInit {
  constructor( private dishService: DishService) { }
  ngOnInit(): void {
    this.dishes = this.dishService.getDishes();
    
  }

  dishes: Dish[] = DISHES;

  selectedDish: Dish | undefined;

 
  onSelect(dish: Dish) {
    this.selectedDish = dish;}



  
}
