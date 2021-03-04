const b = require('./b')

test('adds 1 + 2 to equal 3', () => {
    expect(b(3, [3, 2, 2])).toBe(1);
});

test('adds 1 + 2 to equal 3', () => {
    expect(b(4, [2, 2, 3, 2])).toBe(0);
});

test('adds 1 + 2 to equal 3', () => {
    expect(b(3, [0, 3, 0])).toBe(3);
});