import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Restaurant } from '../model/restaurant';
import { Router } from '@angular/router';
import { RestaurantService } from '../service/restaurant-service';
import { Reservation } from '../model/reservation';

@Component({
  selector: 'app-customer-component',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './customer-component.html',
  styleUrl: './customer-component.css',
})
export class CustomerComponent {

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
    console.log("customerComponent - stored restaurant id: " + this.restaurantService.getRestaurant()?.getId() + "\n\r" +
                "customerComponent - stored restaurant name: " + this.restaurantService.getRestaurant()?.getName() + "\n\r" +
                "customerComponent - stored restaurant open from: " + this.restaurantService.getRestaurant()?.getOpenFrom() + "\n\r" +
                "customerComponent - stored restaurant open to: " + this.restaurantService.getRestaurant()?.getOpenTo() + "\n\r" +
                "customerComponent - stored restaurant available seats: " + this.restaurantService.getRestaurant()?.getAvailableSeatPerHour() + "\n\r" +
                "customerComponent - stored reservation name: " + this.restaurantService.getReservation()?.getName() + "\n\r" +
                "customerComponent - stored reservation email: " + this.restaurantService.getReservation()?.getEmail() + "\n\r" +
                "customerComponent - stored reservation phone: " + this.restaurantService.getReservation()?.getPhone());
  }
  
  formData = {
    name: "",
    email: "",
    phone: ""
  };

  submitForm() {
    console.log('Beküldött adatok:', this.formData);
    let reservation = new Reservation();
      reservation.setName(this.formData.name);
      reservation.setEmail(this.formData.email);
      reservation.setPhone(this.formData.phone);

    this.restaurantService.setReservation(reservation);

    let givenResName = this.restaurantService.getReservation()?.getName();
    let givenResEmail = this.restaurantService.getReservation()?.getEmail();
    let givenResPhone = this.restaurantService.getReservation()?.getPhone();

    console.log("customerComponent - stored reservation name: " + givenResName + "\n\r" +
                "customerComponent - stored reservation email: " + givenResEmail + "\n\r" +
                "customerComponent - stored reservation phone: " + givenResPhone);
    
    if( givenResName != "" &&
        givenResEmail != "" &&
        givenResPhone != ""){
      this.router.navigate(['/reservation']);
    }
    else{
      console.log('customerComponent - Nem adott meg nevet, email-t vagy telefonszámot')
    }
    
  }

  onCustomerBackButtonClick() {
    console.log('customerComponent - A Vissza gombra kattintottak!');
    
    let reservation = new Reservation();
      reservation.setName(this.formData.name);
      reservation.setEmail(this.formData.email);
      reservation.setPhone(this.formData.phone);

    this.restaurantService.setReservation(reservation);

    console.log("customerComponent - stored reservation name: " + this.restaurantService.getReservation()?.getName() + "\n\r" +
                "customerComponent - stored reservation email: " + this.restaurantService.getReservation()?.getEmail() + "\n\r" +
                "customerComponent - stored reservation phone: " + this.restaurantService.getReservation()?.getPhone());
    

    this.router.navigate(['/']);
  }

}
