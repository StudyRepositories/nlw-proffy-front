import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectComponent } from './shared/components/select/select.component';
import { TimeComponent } from './shared/components/time/time.component';
import { OptionRotatorComponent } from './components/option-rotator/option-rotator.component';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';

@NgModule({
	declarations: [
		SelectComponent,
		TimeComponent,
		OptionRotatorComponent
	],
	imports: [
		CommonModule,
		FontAwesomeModule
	],
	exports: [
		SelectComponent,
		TimeComponent
	]
})
export class FormModule {
	constructor(library: FaIconLibrary) {
		library.addIconPacks(fab, far, fas);
	}
}
