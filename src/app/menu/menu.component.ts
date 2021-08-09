import { Component, OnInit } from '@angular/core';
import { DISHES } from '../shared/dishes';
import { Dish } from '../shared/dish';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
  
export class MenuComponent implements OnInit {
  constructor() { }
  ngOnInit(): void {
    
  }

  dishes: Dish[] = DISHES;

  selectedDish: Dish | undefined;

 
  onSelect(dish: Dish) {
    this.selectedDish = dish;}



  
}
