import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectComponent } from './components/select/select.component';
import { TimeComponent } from './components/time/time.component';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';

@NgModule({
  declarations: [
    SelectComponent,
    TimeComponent
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
