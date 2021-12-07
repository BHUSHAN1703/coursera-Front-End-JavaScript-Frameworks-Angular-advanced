import { Component, OnInit, ViewEncapsulation ,Input} from '@angular/core';
import { Dish } from '../shared/dish';
import { DishService } from '../services/dish.service';

import { Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';




@Component({
	selector: 'app-dishdetail',
	templateUrl: './dishdetail.component.html',
	styleUrls: ['./dishdetail.component.scss'],
	encapsulation: ViewEncapsulation.None
})
export class DishdetailComponent implements OnInit {
	
	
	dish: Dish | undefined;
	  constructor(private dishservice: DishService,
    private route: ActivatedRoute,
    private location: Location) { }
	

	ngOnInit() {
		const id = this.route.snapshot.params['id'];
		this.dishservice.getDish(id)
		.then(dish => this.dish =  dish);
		
	  }

	  goBack(): void {
		this.location.back();
	  }
	

}

function then(arg0: (dish: any) => any) {
	throw new Error('Function not implemented.');
}
