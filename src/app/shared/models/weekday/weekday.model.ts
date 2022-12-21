import { Entity } from "../../interfaces/entity";

export class WeekdayModel implements Entity{

    private name: string;

    constructor(name: string) {
        this.name = name;
    }

    getName(): string {
        return this.name;
    }


}
