import {assert, test} from 'vitest';
import {removeExclamationMarks} from './Remove-exclamation-marks';

test('Remove exclamation marks', () => {
    assert.strictEqual(removeExclamationMarks("Hello World!"), "Hello World");
    assert.strictEqual(removeExclamationMarks("He!llo !Wor!ld!"), "Hello World");
    assert.strictEqual(removeExclamationMarks("!"), "");
    assert.strictEqual(removeExclamationMarks("!1!2!3!4!5!"), "12345");
})