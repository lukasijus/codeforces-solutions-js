const a = require('./a')

const p11 = [0, 2]; const p12 = [4,2]; const p13 = [2, 0]; const p14 = [2 ,4];
const p21 = [1, 0]; const p22 = [2,0]; const p23 = [4, 0]; const p24 = [6, 0];
const p31 = [1, 6]; const p32 = [2,2]; const p33 = [2, 5]; const p4 = [4, 1];


const ans1 = 8; const ans2 = 7; const ans3 = 5; 

test('adds 1 + 2 to equal 3', () => {
    expect(a(p11,p12,p13,p14)).toEqual(ans1);
});

test('adds 1 + 2 to equal 3', () => {
    expect(a(p21,p22,p23,p24)).toEqual(ans2);
});

test('adds 1 + 2 to equal 3', () => {
    expect(a(p31,p22,p23,p24)).toEqual(ans3);
});

