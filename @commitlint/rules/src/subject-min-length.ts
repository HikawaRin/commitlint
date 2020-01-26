import {minLength} from '@commitlint/ensure';
import {Rule} from './types';

export const subjectMinLength: Rule<number> = (
	parsed,
	when = undefined,
	value = 0
) => {
	const input = parsed.subject;
	if (!input) {
		return [true];
	}
	return [
		minLength(input, value),
		`subject must not be shorter than ${value} characters`
	];
};