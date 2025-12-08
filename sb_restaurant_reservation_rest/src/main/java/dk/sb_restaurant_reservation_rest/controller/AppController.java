package dk.sb_restaurant_reservation_rest.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import dk.sb_restaurant_reservation_rest.dto.AvailableTimeSlotsDto;
import dk.sb_restaurant_reservation_rest.dto.ReservationDto;
import dk.sb_restaurant_reservation_rest.dto.RestaurantDto;
import dk.sb_restaurant_reservation_rest.model.Reservation;
import dk.sb_restaurant_reservation_rest.service.AppService;

@CrossOrigin("http://localhost:4200")
@RestController
public class AppController {

	private AppService service;

	@Autowired
	public AppController(AppService service) {
		super();
		this.service = service;
	}
	
	
	@GetMapping("/restaurants")
	public List<RestaurantDto> getAllRestaurants(){
		
		List<RestaurantDto> resDtoList = service.getAllRestaurant();
		
		return resDtoList;
		
	}
	
	@GetMapping("/availabletimeslots")
	public List<AvailableTimeSlotsDto> getAvailableTimeSlots(
						@RequestParam("rid") Integer restaurantId,
						@RequestParam("rdate") String reservationDate,
						@RequestParam("seats") Integer reservationSeats){
		
		List<AvailableTimeSlotsDto> availableTimeSlotsDtoList = service.getAvailableTimeSlots(	restaurantId, 
																								reservationDate, 
																								reservationSeats);
		
		
		
		return availableTimeSlotsDtoList;
		
	}
	
	@PostMapping("/savereservation")
	public Reservation saveReservation(
						@RequestBody ReservationDto reservation){
		
		Reservation result = null;
		
		result = service.saveReservation(reservation);
		
		return result;
		
	}
}
