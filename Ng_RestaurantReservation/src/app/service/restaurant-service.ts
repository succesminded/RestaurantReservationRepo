import { Injectable } from '@angular/core';
import { Restaurant } from '../model/restaurant';
import { Reservation } from '../model/reservation';

@Injectable({
  providedIn: 'root',
})
export class RestaurantService {
  
  private restaurant: Restaurant | null;
  private reservation: Reservation | null;


  public constructor() {
    this.restaurant = new Restaurant();
    this.reservation = new Reservation();
  }
  
  public setRestaurant(restaurant: Restaurant | null) {
    this.restaurant = restaurant;
  }

  public getRestaurant(): Restaurant | null {
    return this.restaurant;
  }

  public setReservation(reservation: Reservation | null) {
    this.reservation = reservation;
  }

  public getReservation(): Reservation | null {
    return this.reservation;
  }

}
