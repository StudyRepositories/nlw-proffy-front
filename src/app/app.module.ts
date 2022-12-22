import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormModule } from "./modules/form/form.module";
import { HomeComponent } from './components/home/home.component';
import { TeacherListComponent } from './components/teacher/teacher-list/teacher-list.component';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';

@NgModule({
	declarations: [
		AppComponent,
		HomeComponent,
		TeacherListComponent
	],
	providers: [],
	bootstrap: [AppComponent],
	imports: [
		BrowserModule,
		AppRoutingModule,
		FormModule,
		FontAwesomeModule
	]
})
export class AppModule {
	constructor(library: FaIconLibrary) {
		library.addIconPacks(fab, far, fas);
	}
}
