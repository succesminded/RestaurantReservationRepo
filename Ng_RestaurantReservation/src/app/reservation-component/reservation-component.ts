import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Restaurant } from '../model/restaurant';
import { Reservation } from '../model/reservation';
import { Router } from '@angular/router';
import { RestaurantService } from '../service/restaurant-service';

@Component({
  selector: 'app-reservation-component',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './reservation-component.html',
  styleUrl: './reservation-component.css',
})
export class ReservationComponent {

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

  today: string = "";

  ngOnInit() {
    console.log("reservationComponent - stored restaurant id: " + this.restaurantService.getRestaurant()?.getId() + "\n\r" +
                "reservationComponent - stored restaurant name: " + this.restaurantService.getRestaurant()?.getName() + "\n\r" +
                "reservationComponent - stored restaurant open from: " + this.restaurantService.getRestaurant()?.getOpenFrom() + "\n\r" +
                "reservationComponent - stored restaurant open to: " + this.restaurantService.getRestaurant()?.getOpenTo() + "\n\r" +
                "reservationComponent - stored restaurant available seats: " + this.restaurantService.getRestaurant()?.getAvailableSeatPerHour() + "\n\r" +
                "reservationComponent - stored reservation name: " + this.restaurantService.getReservation()?.getName() + "\n\r" +
                "reservationComponent - stored reservation email: " + this.restaurantService.getReservation()?.getEmail() + "\n\r" +
                "reservationComponent - stored reservation phone: " + this.restaurantService.getReservation()?.getPhone());
    
    //a mai dátum meghatározása
    this.today = new Date().toISOString().split('T')[0];
  }


  formData = {
    date: "",
    seats: 0,
  };

  submitForm() {
    console.log('Beküldött adatok:', this.formData);
    //új adatok mentése a service reservation példányába
    this.restaurantService.getReservation()?.setDate(this.formData.date);
    this.restaurantService.getReservation()?.setSeats(this.formData.seats);

    let givenResDate = this.restaurantService.getReservation()?.getDate();
    let givenResSeats = this.restaurantService.getReservation()?.getSeats();

    console.log("reservationComponent - stored reservation date: " + givenResDate + "\n\r" +
                "reservationComponent - stored reservation seats: " + givenResSeats);
    
    if( givenResDate != "" &&
        givenResSeats != 0){
      this.router.navigate(['/availabletimeslots']);
    }
    else{
      console.log('reservationComponent - Nem adott meg dátumot vagy vendég számot')
    }
    
  }

  onReservationBackButtonClick() {
    console.log('reservationComponent - A Vissza gombra kattintottak!');

    this.router.navigate(['/customer']);
  }

}
