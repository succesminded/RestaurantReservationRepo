import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
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

  private router: Router;
  public restaurantService: RestaurantService;
  

  public constructor(router: Router, restaurantService: RestaurantService) {
      this.router = router;
      this.restaurantService = restaurantService;
  }

  today: string = "";

  ngOnInit() {
    //a mai dátum meghatározása
    this.today = new Date().toISOString().split('T')[0];
  }

  submitForm(form: NgForm) {
    
    let date = form.value.date;
    let seats = form.value.seats;

    //új adatok mentése a service reservation példányába
    this.restaurantService.getReservation()?.setDate(date);
    this.restaurantService.getReservation()?.setSeats(seats);

    if( date != "" &&
        seats != 0){
      this.router.navigate(['/availabletimeslots']);
    }
    else{
      console.log('reservationComponent - Nem adott meg dátumot vagy vendég számot')
    }
    
  }

  onReservationBackButtonClick(form: NgForm) {
    console.log('reservationComponent - A Vissza gombra kattintottak!');

    let date = form.value.date;
    let seats = form.value.seats;

    //új adatok mentése a service reservation példányába
    this.restaurantService.getReservation()?.setDate(date);
    this.restaurantService.getReservation()?.setSeats(seats);

    this.router.navigate(['/customer']);
  }

}
