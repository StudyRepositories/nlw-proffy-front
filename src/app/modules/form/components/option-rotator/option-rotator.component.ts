import { Component, ElementRef, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ArrayUtils, Direction } from 'src/app/modules/shared/utils/array.utils';

@Component({
	selector: 'app-option-rotator',
	templateUrl: './option-rotator.component.html',
	styleUrls: ['./option-rotator.component.scss']
})
export class OptionRotatorComponent implements OnInit {

	protected rotator: Array<any> = new Array<any>();
	protected values: Array<any> = new Array<any>();
	protected selected: any = null;

	@Input() rotatorData: Array<any> = new Array<any>();
	@Input() maxElements: number = 0;

	@Output() onClickEvent: EventEmitter<any> = new EventEmitter<any>();

	ngOnInit(): void {
		this.initRotator();
		this.updateValues();
	}

	private initRotator(): void {
		if (!this.rotatorData.length) throw `Atributo [rotatorData] deve ser definido para inicializar o componente.`;
		this.rotator = Array.from(this.rotatorData);
		this.rotatorData = [];
	}

	private updateValues() {
		this.values = this.rotator.slice(0, this.maxElements);
	}

	protected onMouseWheel(event: Event) {
		if (this.rotator.length <= this.maxElements) return;
		const wheel = event as WheelEvent;
		const direction = wheel.deltaY > 0 ? Direction.LEFT : Direction.RIGHT;
		ArrayUtils.rotate(this.rotator, direction);
		this.updateValues();
	}

	protected onClickOption(event: Event) {
		const target = event.target as Element;
		this.selected = target.getAttribute('value');
		this.onClickEvent.emit(this.selected);
	}
}
