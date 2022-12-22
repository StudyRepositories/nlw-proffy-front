import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionRotatorComponent } from './option-rotator.component';

describe('OptionRotatorComponent', () => {
	let component: OptionRotatorComponent;
	let fixture: ComponentFixture<OptionRotatorComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [OptionRotatorComponent]
		})
			.compileComponents();

		fixture = TestBed.createComponent(OptionRotatorComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
