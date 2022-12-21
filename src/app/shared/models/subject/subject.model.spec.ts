import { SubjectModel } from './subject.model';

describe('SubjectModel', () => {
	it('should create an instance', () => {
		expect(new SubjectModel('Subject')).toBeTruthy();
	});
});
