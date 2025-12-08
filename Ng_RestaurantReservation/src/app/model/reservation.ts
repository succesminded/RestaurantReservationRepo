export class Reservation {

    private id: number;
    private name: string;
	private email: string;
	private phone: string;
    private date: string;
    private seats: number;
    private slot: number;

     public constructor() {
        this.id = 0;
        this.name = "";
        this.email = "";
        this.phone = "";
        this.date = "";
        this.seats = 0;
        this.slot = 0;

    }

    public setId(id: number) {
        this.id = id;
    }

    public getId(): number {
        return this.id;
    }

    public setName(name: string) {
        this.name = name;
    }

    public getName(): string {
        return this.name;
    }

    public setEmail(email: string) {
        this.email = email;
    }

    public getEmail(): string {
        return this.email;
    }

    public setPhone(phone: string) {
        this.phone = phone;
    }

    public getPhone(): string {
        return this.phone;
    }

     public setDate(date: string) {
        this.date = date;
    }

    public getDate(): string {
        return this.date;
    }

    public setSeats(seats: number) {
        this.seats = seats;
    }

    public getSeats(): number {
        return this.seats;
    }

    public setSlot(slot: number) {
        this.slot = slot;
    }

    public getSlot(): number {
        return this.slot;
    }
}
