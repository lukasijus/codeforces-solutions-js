const a = require('./a')

test('yes', () => {
    expect(a('AABBAC')).toBe('YES');
});

test('yes', () => {
    expect(a('CACA')).toBe('YES');
});

test('no', () => {
    expect(a('BBBBAC')).toBe('NO');
});


test('no', () => {
    expect(a('ABCA')).toBe('NO');
});

test('no', () => {
    expect(a('ABBC')).toBe('NO');
});

test('yes', () => {
    expect(a('AB')).toBe('YES');
});