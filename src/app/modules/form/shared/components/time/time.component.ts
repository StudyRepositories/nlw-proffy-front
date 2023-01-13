import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';

@Component({
	selector: 'form-time',
	templateUrl: './time.component.html',
	styleUrls: ['./time.component.scss']
})
export class TimeComponent implements OnInit {

	@Input() label: string = 'Label';
	@Input() minutesInterval: 1 | 5 | 10 | 15 | 30 = 1;

	@Input() hourFormat: 'H12' | 'H24' = 'H24';

	@Output() onValueChange: EventEmitter<string> = new EventEmitter<string>();

	protected hours: Array<string> = new Array<string>();
	protected minutes: Array<string> = new Array<string>();
	protected periods: Array<string> = new Array<string>('AM', 'PM');

	protected isHidden: boolean = true;
	protected value: string = '--:--';

	ngOnInit(): void {
		this.initializeHours();
		this.initializeMinutes();
	}

	private initializeHours() {
		this.hours = Array.from(Array(24).keys()).map(h => h.toString().padStart(2, '0'));
		if (this.hourFormat === 'H12') {
			this.hours = this.hours.slice(1, 13);
			this.value.concat(' AM');
		}
	}

	private initializeMinutes() {
		this.minutes = Array.from(Array(60).keys())
			.filter(x => x % this.minutesInterval == 0)
			.map(h => h.toString().padStart(2, '0'));
	}

	protected openClose(): void {
		this.isHidden = !this.isHidden;
	}

	protected close(): void {
		this.isHidden = true;
	}

	protected updateValue(event: Event, time: string): void {
		const values = this.value.split(/[: ]/g);
		if(time.toLowerCase() === 'h') {
			values[0] = String(event);
		} else if(time.toLowerCase() === 'm') {
			values[1] = String(event);
		} else if (time.toLowerCase() === 'p') {
			values[2] = String(event);
		}

		this.value = `${values[0]}:${values[1]}`;

		if(this.hourFormat === 'H12') {
			this.value.concat(` ${values[2]}`);
		}
	}
}
