import { DisplayValue } from "src/app/modules/form/shared/interfaces/display-value.interface";

export class SubjectModel implements DisplayValue {

	private name: string;

	constructor(name: string) {
		this.name = name;
	}

	getDisplayValue(): string {
		return this.name;
	}
}
