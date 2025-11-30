package dk.sb_restaurant_reservation_rest.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Column;
import org.springframework.data.relational.core.mapping.Table;

@Table(name="restaurants")
public class Restaurant {

	@Id
	@Column(value="id")
	private Integer id;
	
	@Column(value="name")
	private String name;
	
	@Column(value="open_from")
	private Integer openFrom;
	
	@Column(value="open_to")
	private Integer openTo;
	
	@Column(value="available_seat_per_hour")
	private Integer availableSeatPerHour;

	public Restaurant(Integer id, String name, Integer openFrom, Integer openTo, Integer availableSeatPerHour) {
		super();
		this.id = id;
		this.name = name;
		this.openFrom = openFrom;
		this.openTo = openTo;
		this.availableSeatPerHour = availableSeatPerHour;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public Integer getOpenFrom() {
		return openFrom;
	}

	public void setOpenFrom(Integer openFrom) {
		this.openFrom = openFrom;
	}

	public Integer getOpenTo() {
		return openTo;
	}

	public void setOpenTo(Integer openTo) {
		this.openTo = openTo;
	}

	public Integer getAvailableSeatPerHour() {
		return availableSeatPerHour;
	}

	public void setAvailableSeatPerHour(Integer availableSeatPerHour) {
		this.availableSeatPerHour = availableSeatPerHour;
	}
	
	
}
