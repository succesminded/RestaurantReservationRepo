package dk.sb_restaurant_reservation_rest.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import dk.sb_restaurant_reservation_rest.db.ReservationRepository;
import dk.sb_restaurant_reservation_rest.db.RestaurantRepository;
import dk.sb_restaurant_reservation_rest.dto.AvailableTimeSlotsDto;
import dk.sb_restaurant_reservation_rest.dto.ReservationDto;
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
		Iterable<Restaurant> resList = new ArrayList<>();
		
		resList = restaurantRepository.findAll();
		
		for(Restaurant res : resList) {
			
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

		System.out.println("restaurantId: " + restaurantId);
		System.out.println("reservationDate: " + reservationDate);
		System.out.println("reservationSeats: " + reservationSeats);
		
		
		List<ReservationSum> reservationList = new ArrayList<>();
		Restaurant restaurant = null;
		List<AvailableTimeSlotsDto> availableTimeSlotsDtoList = new ArrayList<>();
		
		//
		
		
		Optional<Restaurant> restaurantOpt = restaurantRepository.findById(restaurantId);
		
		if(restaurantOpt.isEmpty() == false){
			
			restaurant = restaurantOpt.get();
			
//			System.out.println("restaurant name: " + restaurant.getName());
//			System.out.println("restaurant from: " + restaurant.getOpenFrom());
//			System.out.println("restaurant to: " + restaurant.getOpenTo());
//			System.out.println("restaurant seats/hour: " + restaurant.getAvailableSeatPerHour());
		}
		
		reservationList = reservationRepository.getReservationByRestaurantIdAndReservationDate(restaurantId, reservationDate);
		
//		for(int index = 0; index < reservationList.size(); index++) {
//			
//			System.out.println(index + ". - " + reservationList.get(index).getHour_from() + " - " + reservationList.get(index).getSumresseats());
//			
//		}
		
//		System.out.println("reservationList: " + reservationList);
		
		//felépíteni a válasz órákat tartalmazó tömböt
		int hourFrom = restaurant.getOpenFrom();
		int hourTo = restaurant.getOpenTo();
		int restaurantSeatPerHour = restaurant.getAvailableSeatPerHour();
		
//		System.out.println("hourFrom: " + hourFrom);
//		System.out.println("hourTo: " + hourTo);
//		System.out.println("restaurantSeatPerHour: "+ restaurantSeatPerHour);
		
		for(int hourIndex = hourFrom; hourIndex < hourTo; hourIndex++) {
			
			
				
				int hourIsInResList = containsHour(reservationList, hourIndex);
//				System.out.println("hourIsInResList: " + hourIsInResList);
				
				if (hourIsInResList != -1) {
					for(int resIndex = 0; resIndex < reservationList.size(); resIndex++) {
						
						int sumReservedInHour = reservationList.get(resIndex).getSumresseats();
//						System.out.println("sumReservedInHour: " + sumReservedInHour);
						
						if(	hourIndex == reservationList.get(resIndex).getHour_from() &&
							(restaurantSeatPerHour >= sumReservedInHour + reservationSeats)){
							
//							System.out.println("ADD");
							
							AvailableTimeSlotsDto availableTimeSlotsDto = new AvailableTimeSlotsDto(hourIndex);
							availableTimeSlotsDtoList.add(availableTimeSlotsDto);
							
						}
						
					}
				}
				else {
					AvailableTimeSlotsDto availableTimeSlotsDto = new AvailableTimeSlotsDto(hourIndex);
					availableTimeSlotsDtoList.add(availableTimeSlotsDto);
				}
				
				
				
				
			//2025-12-04-re nem ad vissza semmit.	
				//Ha benne van a resList-ben akkor kell lekérni az adatait és az if-et futtatni, egyébként simán
				//hozzáadjuk
				
				
				
			}
			
		
		return availableTimeSlotsDtoList;
	}
	
	public int containsHour(List<ReservationSum> reservationList, int hourSearched) {
		
		int result = -1;
		
		for(int index = 0; index < reservationList.size(); index++) {
			
			int hourInList = reservationList.get(index).getHour_from();
			
			if (hourInList == hourSearched) {
				result = index;
			}
		}
		
		return result;
	}


	public Reservation saveReservation(ReservationDto reservation) {
		
		Reservation result = null;
		
		Reservation newRes = new Reservation(
												null,
												reservation.getDate(),
												reservation.getSlot(),
												reservation.getName(),
												reservation.getEmail(),
												reservation.getPhone(),
												reservation.getRid(),
												reservation.getSeats());
		
		result = reservationRepository.save(newRes);
		
		return result;
	}
	
	
}
