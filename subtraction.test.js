const subtraction = require('./subtraction')

describe('check operator', () => {
    it('operator should be -', () => {
        expect(subtraction.operator).toBe('-');
    });
});

describe('check function', () => {

    it('4-2 should be 2', () => {
        // Arrange
        const x = 4;
        const y = 2;

        // Act
        const result = subtraction.fn(x, y);

        // Assert
        expect(result).toBe(2);
    });

    it('-2-8 should be -10', () => {
        // Arrange
        const x = -2;
        const y = 8;

        // Act
        const result = subtraction.fn(x, y);

        // Assert
        expect(result).toBe(-10);
    });

});