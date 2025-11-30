export class Restaurant {

    private id: number;
    private name: string;
	private openFrom: number;
	private openTo: number;
	private availableSeatPerHour: number;

     public constructor() {
        this.id = 0;
        this.name = "";
        this.openFrom = 0;
        this.openTo = 0;
        this.availableSeatPerHour = 0;
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

    public setOpenFrom(openFrom: number) {
        this.openFrom = openFrom;
    }

    public getOpenFrom(): number {
        return this.openFrom;
    }

    public setOpenTo(openTo: number) {
        this.openTo = openTo;
    }

    public getOpenTo(): number {
        return this.openTo;
    }

    public setAvailableSeatPerHour(availableSeatPerHour: number) {
        this.availableSeatPerHour = availableSeatPerHour;
    }

    public getAvailableSeatPerHour(): number {
        return this.availableSeatPerHour;
    }

}
