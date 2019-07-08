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
        const counts = [0, 0, 0, 0, 0, 0, 0, 0, 0];
        counts[this.dice[0] - 1] = counts[this.dice[0] - 1] + 1;
        counts[this.dice[1] - 1] = counts[this.dice[1] - 1] + 1;
        counts[this.dice[2] - 1] = counts[this.dice[2] - 1] + 1;
        counts[this.dice[3] - 1] = counts[this.dice[3] - 1] + 1;
        counts[this.dice[4] - 1] = counts[this.dice[4] - 1] + 1;
        let at;
        for (at = 0; at !== 6; at += 1) if (counts[6 - at - 1] >= 2) return (6 - at) * 2;
        return 0;
    }

    threeOfAKind() {
        const t = [0, 0, 0, 0, 0, 0, 0, 0, 0];
        t[this.dice[0] - 1] = t[this.dice[0] - 1] + 1;
        t[this.dice[1] - 1] = t[this.dice[1] - 1] + 1;
        t[this.dice[2] - 1] = t[this.dice[2] - 1] + 1;
        t[this.dice[3] - 1] = t[this.dice[3] - 1] + 1;
        t[this.dice[4] - 1] = t[this.dice[4] - 1] + 1;
        for (let i = 0; i < 6; i += 1) if (t[i] >= 3) return (i + 1) * 3;
        return 0;
    }

    fourOfAKind() {
        const tallies = [0, 0, 0, 0, 0, 0, 0, 0];
        tallies[this.dice[0] - 1] = tallies[this.dice[0] - 1] + 1;
        tallies[this.dice[1] - 1] = tallies[this.dice[1] - 1] + 1;
        tallies[this.dice[2] - 1] = tallies[this.dice[2] - 1] + 1;
        tallies[this.dice[3] - 1] = tallies[this.dice[3] - 1] + 1;
        tallies[this.dice[4] - 1] = tallies[this.dice[4] - 1] + 1;
        for (let i = 0; i < 6; i += 1) if (tallies[i] >= 4) return (i + 1) * 4;
        return 0;
    }

    twoPairs() {
        const counts = [0, 0, 0, 0, 0, 0, 0, 0, 0];
        counts[this.dice[0] - 1] = counts[this.dice[0] - 1] + 1;
        counts[this.dice[1] - 1] = counts[this.dice[1] - 1] + 1;
        counts[this.dice[2] - 1] = counts[this.dice[2] - 1] + 1;
        counts[this.dice[3] - 1] = counts[this.dice[3] - 1] + 1;
        counts[this.dice[4] - 1] = counts[this.dice[4] - 1] + 1;
        let n = 0;
        let score = 0;
        for (let i = 0; i < 6; i += 1) {
            if (counts[6 - i - 1] >= 2) {
                n += 1;
                score += (6 - i);
            }
        }
        if (n === 2) return score * 2;
        return 0;
    }

    fullHouse() {
        let pairExists = false;
        let i;
        let pairValue = 0;
        let tripleExists = false;
        let tripleValue = 0;


        const tallies = [0, 0, 0, 0, 0, 0, 0, 0];
        tallies[this.dice[0] - 1] = tallies[this.dice[0] - 1] + 1;
        tallies[this.dice[1] - 1] = tallies[this.dice[1] - 1] + 1;
        tallies[this.dice[2] - 1] = tallies[this.dice[2] - 1] + 1;
        tallies[this.dice[3] - 1] = tallies[this.dice[3] - 1] + 1;
        tallies[this.dice[4] - 1] = tallies[this.dice[4] - 1] + 1;

        for (i = 0; i !== 6; i += 1) {
            if (tallies[i] === 2) {
                pairExists = true;
                pairValue = i + 1;
            }
        }

        for (i = 0; i !== 6; i += 1) {
            if (tallies[i] === 3) {
                tripleExists = true;
                tripleValue = i + 1;
            }
        }

        if (pairExists && tripleExists) return pairValue * 2 + tripleValue * 3;
        return 0;
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
