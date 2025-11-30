package dk.sb_restaurant_reservation_rest.db;

import java.util.List;

import org.springframework.data.jdbc.repository.query.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import dk.sb_restaurant_reservation_rest.model.Restaurant;

@Repository
public interface RestaurantRepository extends CrudRepository<Restaurant, Integer>{

	@Query("SELECT * FROM restaurants")
	List<Restaurant> getResList();

}
