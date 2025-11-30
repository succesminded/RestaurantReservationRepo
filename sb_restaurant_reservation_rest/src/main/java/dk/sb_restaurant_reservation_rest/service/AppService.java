package dk.sb_restaurant_reservation_rest.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import dk.sb_restaurant_reservation_rest.db.ReservationRepository;
import dk.sb_restaurant_reservation_rest.db.RestaurantRepository;
import dk.sb_restaurant_reservation_rest.dto.AvailableTimeSlotsDto;
import dk.sb_restaurant_reservation_rest.dto.RestaurantDto;
import dk.sb_restaurant_reservation_rest.model.Reservation;
import dk.sb_restaurant_reservation_rest.model.ReservationSum;
import dk.sb_restaurant_reservation_rest.model.Restaurant;

@Service
public class AppService {

	private RestaurantRepository restaurantRepository;
	private ReservationRepository reservationRepository;

	@Autowired
	public AppService(RestaurantRepository restaurantRepository, ReservationRepository reservationRepository) {
		super();
		this.restaurantRepository = restaurantRepository;
		this.reservationRepository = reservationRepository;
	}
	
	
	public List<RestaurantDto> getAllRestaurant(){
		
		List<RestaurantDto> resDtoList = new ArrayList<>();
		List<Restaurant> resList = new ArrayList<>();
		
		resList = restaurantRepository.getResList();
		
		for(int index = 0; index < resList.size(); index++) {
			
			Restaurant res = resList.get(index);
			RestaurantDto resDto = new RestaurantDto(
														res.getId(), 
														res.getName(),
														res.getOpenFrom(),
														res.getOpenTo(),
														res.getAvailableSeatPerHour());
			resDtoList.add(resDto);
		}
		
		return resDtoList;
	}


	public List<AvailableTimeSlotsDto> getAvailableTimeSlots(Integer restaurantId, String reservationDate,
			Integer reservationSeats) {

		List<ReservationSum> reservationList = new ArrayList<>();
		Restaurant restaurant = null;
		List<AvailableTimeSlotsDto> availableTimeSlotsDtoList = new ArrayList<>();
		
		//
		
		
		Optional<Restaurant> restaurantOpt = restaurantRepository.findById(restaurantId);
		
		if(restaurantOpt.isEmpty() == false){
			
			restaurant = restaurantOpt.get();
			
			System.out.println("restaurant name: " + restaurant.getName());
			System.out.println("restaurant from: " + restaurant.getOpenFrom());
			System.out.println("restaurant to: " + restaurant.getOpenTo());
			System.out.println("restaurant seats/hour: " + restaurant.getAvailableSeatPerHour());
		}
		
		reservationList = reservationRepository.getReservationByRestaurantIdAndReservationDate(restaurantId, reservationDate);
		
		for(int index = 0; index < reservationList.size(); index++) {
			
			System.out.println(index + ". - " + reservationList.get(index).getHour_from() + " - " + reservationList.get(index).getSumresseats());
			
		}
		
		//felépíteni a válasz órákat tartalmazó tömböt
		int hourFrom = restaurant.getOpenFrom();
		int hourTo = restaurant.getOpenTo();
		
		for(int index = hourFrom; index < hourTo; index++) {
			AvailableTimeSlotsDto availableTimeSlotsDto = new AvailableTimeSlotsDto(index);
			
			availableTimeSlotsDtoList.add(availableTimeSlotsDto);
		}
		
		return availableTimeSlotsDtoList;
	}
	
	
	
}
