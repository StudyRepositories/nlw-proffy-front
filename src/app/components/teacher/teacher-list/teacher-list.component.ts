import { Component } from '@angular/core';
import { MinuteInterval } from 'src/app/shared/enums/minutes.interval.enum';
import { SubjectModel } from 'src/app/shared/models/subject/subject.model';
import { WeekdayModel } from 'src/app/shared/models/weekday/weekday.model';


@Component({
  selector: 'app-teacher-list',
  templateUrl: './teacher-list.component.html',
  styleUrls: ['./teacher-list.component.scss']
})
export class TeacherListComponent {

  subjects: Array<SubjectModel> = [
    new SubjectModel('Artes'), new SubjectModel('Biologia'),
    new SubjectModel('Ciências'), new SubjectModel('Educação Física'),
    new SubjectModel('Física'), new SubjectModel('Geografia'),
    new SubjectModel('História'), new SubjectModel('Matemática'),
    new SubjectModel('Português'), new SubjectModel('Química')
  ];

  weekdays: Array<WeekdayModel> = [
    new WeekdayModel('Domingo'), new WeekdayModel('Segunda'), new WeekdayModel('Terça'),
    new WeekdayModel('Quarta'), new WeekdayModel('Quinta'), new WeekdayModel('Sexta'),
    new WeekdayModel('Sábado')
  ];

  interval: MinuteInterval = MinuteInterval.QUINZE;

}
