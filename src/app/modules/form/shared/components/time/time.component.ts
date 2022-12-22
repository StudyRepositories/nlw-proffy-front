import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { MinuteInterval } from '../../constants/minute-interval.enum';

@Component({
	selector: 'form-time',
	templateUrl: './time.component.html',
	styleUrls: ['./time.component.scss']
})
export class TimeComponent implements OnInit {

	@Input() label: string = 'Label';
	@Input() minutesInterval: MinuteInterval = MinuteInterval.ONE;

	@Output() onValueChange: EventEmitter<string> = new EventEmitter<string>();

	hours: Array<number> = Array.from(Array(24).keys());
	minutes: Array<number> = [];

	protected value: string = '--:--';
	protected isHidden: boolean = true;

	protected displayHours: Array<number> = [];

	selectedHour: number;
	selectedMinute: number;

	ngOnInit(): void {
		this.displayHours = this.hours.slice(0, 5);
		this.initializeMinutes();
	}

	private initializeMinutes() {
		const its: number = 60 / this.minutesInterval;
		for (let i = 0; i < its; i++) {
			this.minutes.push(this.minutesInterval * i);
		}
	}

	protected openClose(): void {
		this.isHidden = !this.isHidden;
	}

	protected close(): void {
		this.isHidden = true;
	}

	private updateValue() {
		let hh = this.selectedHour >= 0 ? this.selectedHour.toString().padStart(2, '0') : '--';
		let mm = this.selectedMinute >= 0 ? this.selectedMinute.toString().padStart(2, '0') : '--';
		this.value = `${hh}:${mm}`
	}

	private tryEmitValue(): void {
		if (this.selectedHour >= 0 && this.selectedMinute >= 0) {
			this.onValueChange.emit(this.value);
		}
	}
}
