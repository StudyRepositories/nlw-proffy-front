import { Component, Input, Output, EventEmitter } from '@angular/core';
import { DisplayValue } from '../../interfaces/display-value.interface';

@Component({
	selector: 'form-select',
	templateUrl: './select.component.html',
	styleUrls: ['./select.component.scss']
})
export class SelectComponent {

	@Input() label: string = 'Label';
	@Input() displayLabel: string = 'Selecione uma Opção'
	@Input() options: Array<DisplayValue> = [];

	@Output() onValueChange: EventEmitter<number> = new EventEmitter<number>();

	protected value: number = null;
	protected isHidden: boolean = true;

	protected openClose(): void {
		this.isHidden = !this.isHidden;
	}

	protected close(): void {
		this.isHidden = true;
	}

	protected onClickOption(event: Event): void {
		const element: Element = event.target as Element;
		const value: number = Number(element.getAttribute('value'));

		this.value = value;
		this.onValueChange.emit(value);

		this.openClose();
	}
}
