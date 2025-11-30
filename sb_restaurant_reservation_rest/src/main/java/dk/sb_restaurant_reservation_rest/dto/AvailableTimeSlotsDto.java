package dk.sb_restaurant_reservation_rest.dto;

public class AvailableTimeSlotsDto {
	
	private int hour_from;

	public AvailableTimeSlotsDto(int hour_from) {
		super();
		this.hour_from = hour_from;
	}

	public int getHour_from() {
		return hour_from;
	}

	public void setHour_from(int hour_from) {
		this.hour_from = hour_from;
	}
	

}
