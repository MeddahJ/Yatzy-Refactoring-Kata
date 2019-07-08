const _ = require('lodash');
const MultiSet = require('mnemonist/multi-set');

class Yatzy {
    constructor(d1, d2, d3, d4, d5) {
        this.dice = [d1, d2, d3, d4, d5];
    }

    chance() {
        return _.sum(this.dice);
    }

    yatzy() {
        return new Set(this.dice).size === 1 ? 50 : 0;
    }

    ones() {
        return this.sumDiceWithValue(1);
    }

    twos() {
        return this.sumDiceWithValue(2);
    }

    threes() {
        return this.sumDiceWithValue(3);
    }

    fours() {
        return this.sumDiceWithValue(4);
    }

    fives() {
        return this.sumDiceWithValue(5);
    }

    sixes() {
        return this.sumDiceWithValue(6);
    }

    sumDiceWithValue(n) {
        return _.sum(this.dice.filter(die => die === n));
    }

    pair() {
        return Yatzy.sumDiceOccurring(2, this.dice);
    }

    threeOfAKind() {
        return Yatzy.sumDiceOccurring(3, this.dice);
    }

    fourOfAKind() {
        return Yatzy.sumDiceOccurring(4, this.dice);
    }

    twoPairs() {
        const firstPairSum = Yatzy.sumDiceOccurring(2, this.dice);

        const remainingDice = _.without(this.dice, firstPairSum / 2);

        const secondPairSum = Yatzy.sumDiceOccurring(2, remainingDice);

        return Yatzy.sumIfNoneZero(firstPairSum, secondPairSum);
    }

    fullHouse() {
        const tripleSum = Yatzy.sumDiceOccurring(3, this.dice);

        const remainingDice = _.without(this.dice, tripleSum / 3);

        const pairSum = Yatzy.sumDiceOccurring(2, remainingDice);

        return Yatzy.sumIfNoneZero(tripleSum, pairSum);
    }

    static sumDiceOccurring(n, dice) {
        // multiplicities() returns an iterator, Array.from makes an iterable out of it
        // diceBag is an array of [value, count] arrays
        const diceBag = Array.from(MultiSet.from(dice).multiplicities());

        const potentialTuples = diceBag
            .filter(([, count]) => count >= n)
            .map(([value]) => value)
            .sort()
            .reverse(); // Highest tuple value first, essentially a .sort(desc)

        return potentialTuples.length >= 1 ? potentialTuples[0] * n : 0;
    }

    static sumIfNoneZero(a, b) {
        return _.every([a, b]) ? a + b : 0;
    }

    smallStraight() {
        // Only one combination of 5D6 can yield this sum
        return this.chance() === 15 ? 15 : 0;
    }

    largeStraight() {
        // Only one combination of 5D6 can yield this sum
        return this.chance() === 20 ? 20 : 0;
    }
}

module.exports = Yatzy;
