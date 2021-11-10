/**
 *
 * A simple class containing methods for validating numbers
 * @class NumbersValidator
 */
class NumbersValidator {
    /**
     * Creates an instance of NumberValidator
     * @memberOf NumbersValidator
     */
    constructor() {
    };

    /**
     *
     * @param {Number} number number to check
     * @returns {Boolean} true if number is even
     * @memberOf NumbersValidator
     */
    isNumberEven(number) {
        const typeOfVariable = typeof number;
        if (typeOfVariable !== 'number') {
            throw new Error(`[${number}] is not a type of Number, it is type of ${typeOfVariable}`)
        } else {
            return number % 2 === 0
        }
    }

    /**
     *
     * @param {Array<Number>} arrayOfNumbers array of numbers to go through
     * @returns {Array<Number>} array of even numbers
     * @memberOf NumbersValidator
     */
    getEvenNumbersFromArray(arrayOfNumbers) {
        if (Array.isArray(arrayOfNumbers) && arrayOfNumbers.every((item) => typeof item === "number")) {
            const arrayOfEvenNumbers=arrayOfNumbers.filter(this.isNumberEven);
            return arrayOfNumbers;
        }
        else{
            throw new Error(`[${arrayOfNumbers}] is not an array of "Numbers"`)
        }
    }
}

module.exports = NumbersValidator;