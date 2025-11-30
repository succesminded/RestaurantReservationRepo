import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Restaurant } from '../model/restaurant';
import { Reservation } from '../model/reservation';
import { Router } from '@angular/router';
import { RestaurantService } from '../service/restaurant-service';

@Component({
  selector: 'app-available-time-slots-component',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './available-time-slots-component.html',
  styleUrl: './available-time-slots-component.css',
})
export class AvailableTimeSlotsComponent {

  private restaurant: Restaurant | null;
  private reservation: Reservation | null;
  private router: Router;
  public resList: Restaurant[] = [];
  public restaurantService: RestaurantService;
  private name: string = "";
  

  public constructor(router: Router, restaurantService: RestaurantService) {
      this.restaurant = null;
      this.reservation = null;
      this.router = router;
      this.resList = [];
      this.restaurantService = restaurantService;
  }

  ngOnInit() {
    console.log("availabletimeslotsComponent - stored restaurant id: " + this.restaurantService.getRestaurant()?.getId() + "\n\r" +
                "availabletimeslotsComponent - stored restaurant name: " + this.restaurantService.getRestaurant()?.getName() + "\n\r" +
                "availabletimeslotsComponent - stored restaurant open from: " + this.restaurantService.getRestaurant()?.getOpenFrom() + "\n\r" +
                "availabletimeslotsComponent - stored restaurant open to: " + this.restaurantService.getRestaurant()?.getOpenTo() + "\n\r" +
                "availabletimeslotsComponent - stored restaurant available seats: " + this.restaurantService.getRestaurant()?.getAvailableSeatPerHour() + "\n\r" +
                "availabletimeslotsComponent - stored reservation name: " + this.restaurantService.getReservation()?.getName() + "\n\r" +
                "availabletimeslotsComponent - stored reservation email: " + this.restaurantService.getReservation()?.getEmail() + "\n\r" +
                "availabletimeslotsComponent - stored reservation phone: " + this.restaurantService.getReservation()?.getPhone());
  }

}
