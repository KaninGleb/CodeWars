import {expect, test} from 'vitest';
import {templateStrings} from './Template-Strings';

test('Template Strings', () => {
    expect(templateStrings('Animals', 'Good')).toBe('Animals are Good');
    expect(templateStrings('You', 'special')).toBe('You are special');
    expect(templateStrings('lives', 'frozen')).toBe('lives are frozen');
})