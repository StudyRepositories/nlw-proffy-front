import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { MinuteInterval } from 'src/app/shared/enums/minutes.interval.enum';

@Component({
	selector: 'form-time',
	templateUrl: './time.component.html',
	styleUrls: ['./time.component.scss']
})
export class TimeComponent implements OnInit {

	@Input() label: string = 'Label';
	@Input() minutesInterval: MinuteInterval = MinuteInterval.UM;

	@Output() onValueChange: EventEmitter<string> = new EventEmitter<string>();

	private hours: Array<number> = Array.from(Array(24).keys());
	private minutes: Array<number> = [];

	protected value: string = '--:--';
	protected isHidden: boolean = true;

	protected displayHours: Array<number> = [];
	protected displayMinutes: Array<number> = [];

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
		this.displayMinutes = this.minutes.slice(0, 5);
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

	private rotateArray(array: Array<any>, toRight: boolean) {
		if (array.length <= 5) return;
		if (toRight) {
			array.unshift(array.pop());
		} else {
			array.push(array.shift());
		}
	}

	onWheelHours(event: Event): void {
		event.preventDefault();
		const wheel = event as WheelEvent;
		this.rotateArray(this.hours, (wheel.deltaY < 0));
		this.displayHours = this.hours.slice(0, 5);
	}

	onWheelMinutes(event: Event): void {
		event.preventDefault();
		const wheel = event as WheelEvent;
		this.rotateArray(this.minutes, (wheel.deltaY < 0));
		this.displayMinutes = this.minutes.slice(0, 5);
	}

	onClickHour(event: Event): void {
		event.preventDefault();
		const click = event as MouseEvent;
		const target = click.target as HTMLElement;

		this.selectedHour = Number(target.getAttribute('value'));
		this.updateValue();
	}

	onClickMinute(event: Event): void {
		event.preventDefault();
		const click = event as MouseEvent;
		const target = click.target as HTMLElement;

		this.selectedMinute = Number(target.getAttribute('value'));
		this.updateValue();
	}

	onWheelOption(event: Event, trigger: string): void {

	}

	onClickOption(event: Event, trigger: string): void {
		event.preventDefault();
		const click = event as MouseEvent;
		const target = click.target as HTMLElement;

		if (trigger === 'hour') {

		} else if (trigger === 'minute') {

		}

		this.updateValue();
	}

	private tryEmitValue(): void {
		if (this.selectedHour >= 0 && this.selectedMinute >= 0) {
			this.onValueChange.emit(this.value);
		}
	}
}
