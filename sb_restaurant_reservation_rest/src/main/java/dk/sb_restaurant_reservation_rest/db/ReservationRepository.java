package dk.sb_restaurant_reservation_rest.db;

import java.util.List;

import org.springframework.data.jdbc.repository.query.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import dk.sb_restaurant_reservation_rest.model.Reservation;
import dk.sb_restaurant_reservation_rest.model.ReservationSum;

@Repository
public interface ReservationRepository extends CrudRepository<Reservation, Integer>{

	@Query("SELECT hour_from, SUM(reserved_seats) AS \"sumresseats\" FROM reservations WHERE restaurant_id = :rid AND date = :date GROUP BY hour_from")
	List<ReservationSum> getReservationByRestaurantIdAndReservationDate(
			@Param("rid") Integer restaurantId, 
			@Param("date") String reservationDate);
	
}
