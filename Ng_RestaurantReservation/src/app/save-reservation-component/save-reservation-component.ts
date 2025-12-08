import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ChangeDetectorRef, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RestaurantService } from '../service/restaurant-service';
import { Reservation } from '../model/reservation';

@Component({
  selector: 'app-save-reservation-component',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './save-reservation-component.html',
  styleUrl: './save-reservation-component.css',
})
export class SaveReservationComponent {

  public restaurantService: RestaurantService;
  private http: HttpClient;
  public saveResResponse: string;
  private reservation: Reservation | null;
  private cdr: ChangeDetectorRef;
  

  public constructor(restaurantService: RestaurantService, http: HttpClient, cdr: ChangeDetectorRef) {

      this.restaurantService = restaurantService;
      this.http = http;
      this.saveResResponse = "Ez itt a végüzenet helye";
      this.reservation = null;
      this.cdr = cdr;
  }


  ngOnInit() {

    //foglalás mentése
    this.saveReservation();

  }


  public saveReservation(){

    const body = {
      rid: this.restaurantService.getRestaurant()?.getId(),
      name: this.restaurantService.getReservation()?.getName(),
      email: this.restaurantService.getReservation()?.getEmail(),
      phone: this.restaurantService.getReservation()?.getPhone(),
      date: this.restaurantService.getReservation()?.getDate(),
      seats: this.restaurantService.getReservation()?.getSeats(),
      slot: this.restaurantService.getReservation()?.getSlot()
    };

    let saveReservation = this.http.post("http://localhost:8080/savereservation", body);

    saveReservation.subscribe({
      next: (res) => {
        console.log('Sikeres válasz:', res);
        this.reservation = Object.assign(new Reservation(), res)
        if(this.reservation.getId() > 0){
          this.saveResResponse = "Sikeres foglalás, várjuk szeretettel!";
          this.cdr.markForCheck();
        }
      },
      error: (err) => {
        console.log('Hiba:', err);
        this.saveResResponse = "SIKERTELEN foglalás, próbálja újra...";
        this.cdr.markForCheck();
      }
    });

  }
}
