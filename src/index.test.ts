import { greeter } from './index';

test('My greeter', () => {
    expect(greeter('Carl')).toBe('Hello Carl');
});