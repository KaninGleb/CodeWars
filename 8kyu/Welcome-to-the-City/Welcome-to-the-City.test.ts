import {assert, test} from 'vitest';
import {sayHello} from './Welcome-to-the-City';


test('Welcome to the City', () => {
    assert.strictEqual(sayHello(['John', 'Smith'], 'Phoenix', 'Arizona'),
        'Hello, John Smith! Welcome to Phoenix, Arizona!');
    assert.strictEqual(sayHello(['Franklin', 'Delano', 'Roosevelt'], 'Chicago', 'Illinois'),
        'Hello, Franklin Delano Roosevelt! Welcome to Chicago, Illinois!');
    assert.strictEqual(sayHello(['Wallace', 'Russel', 'Osbourne'], 'Albany', 'New York'),
        'Hello, Wallace Russel Osbourne! Welcome to Albany, New York!');
})