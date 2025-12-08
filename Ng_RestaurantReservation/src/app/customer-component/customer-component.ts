import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
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

  private router: Router;
  public resList: Restaurant[] = [];
  public restaurantService: RestaurantService;
  private name: string = "";
  

  public constructor(router: Router, restaurantService: RestaurantService) {
      this.router = router;
      this.resList = [];
      this.restaurantService = restaurantService;
  }
 

  submitForm(form: NgForm) {
    let name = form.value.name;
    let email = form.value.email;
    let phone = form.value.phone;
    
    let reservation = new Reservation();
      reservation.setName(name);
      reservation.setEmail(email);
      reservation.setPhone(phone);

    this.restaurantService.setReservation(reservation);


    if( name != "" &&
        email != "" &&
        phone != ""){
      this.router.navigate(['/reservation']);
    }
    else{
      console.log('customerComponent - Nem adott meg nevet, email-t vagy telefonszámot')
    }
    
  }

  onCustomerBackButtonClick(form: NgForm) {
    console.log('customerComponent - A Vissza gombra kattintottak!');
    
    let name = form.value.name;
    let email = form.value.email;
    let phone = form.value.phone;
    
    let reservation = new Reservation();
      reservation.setName(name);
      reservation.setEmail(email);
      reservation.setPhone(phone);

    this.restaurantService.setReservation(reservation);

    this.router.navigate(['/']);
  }

}
