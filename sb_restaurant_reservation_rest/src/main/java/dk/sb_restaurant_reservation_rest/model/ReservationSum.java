package dk.sb_restaurant_reservation_rest.model;

public class ReservationSum {

	private int hour_from;
	private int sumresseats;
	
	public ReservationSum(int hour_from, int sumresseats) {
		super();
		this.hour_from = hour_from;
		this.sumresseats = sumresseats;
	}

	public int getHour_from() {
		return hour_from;
	}

	public void setHour_from(int hour_from) {
		this.hour_from = hour_from;
	}

	public int getSumresseats() {
		return sumresseats;
	}

	public void setSumresseats(int sumresseats) {
		this.sumresseats = sumresseats;
	}
	
	
}
