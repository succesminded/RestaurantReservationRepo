export class AvailableSlots {

    private hour_from: number;

    public constructor() {
        this.hour_from = 0;
    }

    public setHourFrom(hour_from: number) {
        this.hour_from = hour_from;
    }

    public getHourFrom(): number {
        return this.hour_from;
    }
}
