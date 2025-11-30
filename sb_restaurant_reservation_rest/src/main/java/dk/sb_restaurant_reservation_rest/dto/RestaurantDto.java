package dk.sb_restaurant_reservation_rest.dto;

public class RestaurantDto {

	private Integer id;
	private String name;
	private Integer openFrom;
	private Integer openTo;
	private Integer availableSeatPerHour;
	
	
	public RestaurantDto(Integer id, String name, Integer openFrom, Integer openTo, Integer availableSeatPerHour) {
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
