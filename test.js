const { sum } = require('./app.js');

// start your first test
test('adds 14 + 9 to equal 23', () => {
    //inside the test we call our sum function with 2 numbers
    let total = sum(14, 9);

    // we expect the sum of those 2 numbers to be 23
    expect(total).toBe(23);
});

test("One euro should be 1.206 dollars", function () {
    // import the function from app.js
    const { fromEuroToDollar } = require('./app.js')

    // use the function like its supposed to be used
    const dollars = fromEuroToDollar(3.5)

    // if 1 euro are 1.206 dollars, then 3.5 euros should be (3.5 * 1.2)
    const expected = 3.5 * 1.2;

    // this is the comparison for the unit test
    expect(fromEuroToDollar(3.5)).toBe(4.2); //1 euro are 1.2 dolares, then 3.5 euros should be = (3.5 * 1.2)
})
test("One dollar should be 107 yen", function () {
    // import the function from app.js
    const { fromDollarToYen } = require('./app.js')
    
    // use the function like its supposed to be used
    const yen = fromDollarToYen(12)

    // if 1 dollar are 107 yen, then 12 dollars should be (12 * 107)
    const expected = 12 * 107;

    // this is the comparison for the unit test
    expect(fromDollarToYen(12)).toBe(1284);
})
test("One yen should be 0.00625 GBP", function() {
    // import the function from app.js
    const { fromYenToPound } = require('./app.js')

    // use the function like its supposed to be used
    const pound = fromYenToPound(200)

    // if 1 yen are 0.00625 GBP, then 200 yen should be (200 * 0.00625)
    const expected = 200 * 0.00625;

    // this is the comparison for the unit test
    expect(fromYenToPound(200)).toBe(1.25);
})
