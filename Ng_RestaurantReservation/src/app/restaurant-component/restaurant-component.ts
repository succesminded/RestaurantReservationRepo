import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { Restaurant } from '../model/restaurant';
import { Router } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';
import { RestaurantService } from '../service/restaurant-service';


@Component({
  selector: 'app-restaurant-component',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './restaurant-component.html',
  styleUrl: './restaurant-component.css',
})
export class RestaurantComponent {

  private http: HttpClient;
  private router: Router;
  public resList: Restaurant[] = [];
  private restaurantService: RestaurantService;
  

  public constructor(http: HttpClient, router: Router, restaurantService: RestaurantService) {
      this.http = http;
      this.router = router;
      this.resList = [];
      this.restaurantService = restaurantService;
  }

  //Éttermek listájának lekérése inicializáláskor
  ngOnInit() {
    this.getAllRestaurant();
  
  }

  public getRestaurantList(): Restaurant[] | null {
    return this.resList;
  }

  public getAllRestaurant() {
  
  let allRestaurants = this.http.get<Restaurant[]>("http://localhost:8080/restaurants");

  allRestaurants.subscribe(
    (response) => {
      
      this.resList = [];

      for(let index = 0; index < response.length; index++){
          let restaurant = Object.assign(new Restaurant(), response[index]);
          this.resList.push(restaurant);
      }

      console.log(this.resList);

    }
  );
  }

  //kiválasztott étterem példánya
  chosenRestaurant: any = null;
  
  saveChosenRestaurantValue() {

    this.restaurantService.setRestaurant(this.chosenRestaurant);

    }

  onButtonClick() {
    console.log('restaurantComponent - A Tovább gombra kattintottak!');
    if(this.chosenRestaurant != null){
      this.router.navigate(['/customer']);
    }
    else{
      console.log('restaurantComponent - Nem választott éttermet')
    }
  }
}
