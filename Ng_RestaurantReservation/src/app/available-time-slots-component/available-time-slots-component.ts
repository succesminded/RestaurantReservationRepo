import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Restaurant } from '../model/restaurant';
import { Reservation } from '../model/reservation';
import { Router } from '@angular/router';
import { RestaurantService } from '../service/restaurant-service';
import { HttpClient, HttpClientModule} from '@angular/common/http';
import { AvailableSlots } from '../model/available-slots';

@Component({
  selector: 'app-available-time-slots-component',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './available-time-slots-component.html',
  styleUrl: './available-time-slots-component.css',
})
export class AvailableTimeSlotsComponent {

  private restaurant: Restaurant | null;
  private reservation: Reservation | null;
  private router: Router;
  public slotList: AvailableSlots[] = [];
  public restaurantService: RestaurantService;
  private name: string = "";
  private http: HttpClient;
  private availableSlots: AvailableSlots | null;
  

  public constructor(router: Router, restaurantService: RestaurantService, http: HttpClient) {
      this.restaurant = null;
      this.reservation = null;
      this.router = router;
      this.slotList = [];
      this.restaurantService = restaurantService;
      this.http = http;
      this.availableSlots = null;
  }

  ngOnInit() {

    this.getAvailableTimeSlots();
    console.log("availabletimeslotsComponent - stored restaurant id: " + this.restaurantService.getRestaurant()?.getId() + "\n\r" +
                "availabletimeslotsComponent - stored restaurant name: " + this.restaurantService.getRestaurant()?.getName() + "\n\r" +
                "availabletimeslotsComponent - stored restaurant open from: " + this.restaurantService.getRestaurant()?.getOpenFrom() + "\n\r" +
                "availabletimeslotsComponent - stored restaurant open to: " + this.restaurantService.getRestaurant()?.getOpenTo() + "\n\r" +
                "availabletimeslotsComponent - stored restaurant available seats: " + this.restaurantService.getRestaurant()?.getAvailableSeatPerHour() + "\n\r" +
                "availabletimeslotsComponent - stored reservation name: " + this.restaurantService.getReservation()?.getName() + "\n\r" +
                "availabletimeslotsComponent - stored reservation email: " + this.restaurantService.getReservation()?.getEmail() + "\n\r" +
                "availabletimeslotsComponent - stored reservation phone: " + this.restaurantService.getReservation()?.getPhone());

  }

  public getAvailableTimeSlotList(): AvailableSlots[] | null {
    return this.slotList;
  }

  public getAvailableTimeSlots(){

      let rid = this.restaurantService.getRestaurant()?.getId();
      let rdate = this.restaurantService.getReservation()?.getDate();
      let rseats = this.restaurantService.getReservation()?.getSeats();

      console.log("rid: " + rid);
      console.log("date: " + rdate);
      console.log("seats: " + rseats);

      let allSlots = this.http.get<AvailableSlots[]>("http://localhost:8080/availabletimeslots?rid=" + rid + "&rdate=" + rdate + "&seats=" + rseats);

      allSlots.subscribe(
        (response) => {
          
          this.slotList = [];

          for(let index = 0; index < response.length; index++){
              let slot = Object.assign(new AvailableSlots(), response[index]);
              this.slotList.push(slot);
          }

          console.log(this.slotList);

      }
    );
  }


  selectedSlot: number = 0;

  submitButtonClicked(){
      
    //új adatok mentése a service reservation példányába
    this.restaurantService.getReservation()?.setSlot(this.selectedSlot);

    console.log("slot: " + this.selectedSlot);

    if( this.selectedSlot != 0 && this.selectedSlot != undefined){
      this.router.navigate(['/savereservation']);
    }
    else{
      console.log('availabletimeslotsComponent - Nem választott időpontot')
    }

  }
}
