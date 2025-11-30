package dk.sb_restaurant_reservation_rest.model;

import java.time.LocalDate;

import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Column;
import org.springframework.data.relational.core.mapping.Table;

@Table(name="reservations")
public class Reservation {

	@Id
	@Column(value="id")
	private Integer id;
	
	@Column(value="date")
	private LocalDate date;
	
	@Column(value="hour_from")
	private Integer from;
	
	@Column(value="name")
	private String name;
	
	@Column(value="email")
	private String email;
	
	@Column(value="phone")
	private String phone;
	
	@Column(value="restaurant_id")
	private Integer resId;
	
	@Column(value="reserved_seats")
	private Integer resSeats;

	public Reservation(Integer id, LocalDate date, Integer from, String name, String email, String phone, Integer resId,
			Integer resSeats) {
		super();
		this.id = id;
		this.date = date;
		this.from = from;
		this.name = name;
		this.email = email;
		this.phone = phone;
		this.resId = resId;
		this.resSeats = resSeats;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public LocalDate getDate() {
		return date;
	}

	public void setDate(LocalDate date) {
		this.date = date;
	}

	public Integer getFrom() {
		return from;
	}

	public void setFrom(Integer from) {
		this.from = from;
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

	public Integer getResId() {
		return resId;
	}

	public void setResId(Integer resId) {
		this.resId = resId;
	}

	public Integer getResSeats() {
		return resSeats;
	}

	public void setResSeats(Integer resSeats) {
		this.resSeats = resSeats;
	}
	
}
