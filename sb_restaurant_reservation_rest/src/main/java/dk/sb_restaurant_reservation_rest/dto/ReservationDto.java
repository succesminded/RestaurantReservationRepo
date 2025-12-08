package dk.sb_restaurant_reservation_rest.dto;

import java.time.LocalDate;

public class ReservationDto {

	private Integer rid; 
    private String name;
    private String email;
    private String phone;
    private LocalDate date;
    private Integer seats;
    private Integer slot;
	
    
    public ReservationDto(Integer rid, String name, String email, String phone, LocalDate date, Integer seats,
			Integer slot) {
		super();
		this.rid = rid;
		this.name = name;
		this.email = email;
		this.phone = phone;
		this.date = date;
		this.seats = seats;
		this.slot = slot;
	}


	public Integer getRid() {
		return rid;
	}

	public void setRid(Integer rid) {
		this.rid = rid;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPhone() {
		return phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}

	public LocalDate getDate() {
		return date;
	}

	public void setDate(LocalDate date) {
		this.date = date;
	}

	public Integer getSeats() {
		return seats;
	}

	public void setSeats(Integer seats) {
		this.seats = seats;
	}

	public Integer getSlot() {
		return slot;
	}

	public void setSlot(Integer slot) {
		this.slot = slot;
	}
    

}
