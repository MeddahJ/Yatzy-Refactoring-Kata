class Yatzy {
    constructor(d1, d2, d3, d4, d5) {
        this.dice = [d1, d2, d3, d4, d5];
    }

    chance() {
        let total = 0;
        total += this.dice[0];
        total += this.dice[1];
        total += this.dice[2];
        total += this.dice[3];
        total += this.dice[4];
        return total;
    }

    yatzy() {
        const counts = [0, 0, 0, 0, 0, 0, 0, 0];
        for (let i = 0; i !== this.dice.length; i += 1) {
            const die = this.dice[i];
            counts[die - 1] = counts[die - 1] + 1;
        }
        for (let i = 0; i !== 6; i += 1) if (counts[i] === 5) return 50;
        return 0;
    }

    ones() {
        let sum = 0;
        if (this.dice[0] === 1) sum += 1;
        if (this.dice[1] === 1) sum += 1;
        if (this.dice[2] === 1) sum += 1;
        if (this.dice[3] === 1) sum += 1;
        if (this.dice[4] === 1) sum += 1;

        return sum;
    }

    twos() {
        let sum = 0;
        if (this.dice[0] === 2) sum += 2;
        if (this.dice[1] === 2) sum += 2;
        if (this.dice[2] === 2) sum += 2;
        if (this.dice[3] === 2) sum += 2;
        if (this.dice[4] === 2) sum += 2;
        return sum;
    }

    threes() {
        let s;
        s = 0;
        if (this.dice[0] === 3) s += 3;
        if (this.dice[1] === 3) s += 3;
        if (this.dice[2] === 3) s += 3;
        if (this.dice[3] === 3) s += 3;
        if (this.dice[4] === 3) s += 3;
        return s;
    }

    fours() {
        let sum;
        sum = 0;
        for (let at = 0; at !== 5; at += 1) {
            if (this.dice[at] === 4) {
                sum += 4;
            }
        }
        return sum;
    }

    fives() {
        let s = 0;
        let i;
        for (i = 0; i < this.dice.length; i += 1) if (this.dice[i] === 5) s += 5;
        return s;
    }

    sixes() {
        let sum = 0;
        for (let at = 0; at < this.dice.length; at += 1) if (this.dice[at] === 6) sum += 6;
        return sum;
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
        const tallies = [0, 0, 0, 0, 0, 0, 0];
        tallies[this.dice[0] - 1] = tallies[this.dice[0] - 1] + 1;
        tallies[this.dice[1] - 1] = tallies[this.dice[1] - 1] + 1;
        tallies[this.dice[2] - 1] = tallies[this.dice[2] - 1] + 1;
        tallies[this.dice[3] - 1] = tallies[this.dice[3] - 1] + 1;
        tallies[this.dice[4] - 1] = tallies[this.dice[4] - 1] + 1;
        if (tallies[0] === 1
            && tallies[1] === 1
            && tallies[2] === 1
            && tallies[3] === 1
            && tallies[4] === 1) return 15;
        return 0;
    }

    largeStraight() {
        const tallies = [0, 0, 0, 0, 0, 0, 0, 0];
        tallies[this.dice[0] - 1] = tallies[this.dice[0] - 1] + 1;
        tallies[this.dice[1] - 1] = tallies[this.dice[1] - 1] + 1;
        tallies[this.dice[2] - 1] = tallies[this.dice[2] - 1] + 1;
        tallies[this.dice[3] - 1] = tallies[this.dice[3] - 1] + 1;
        tallies[this.dice[4] - 1] = tallies[this.dice[4] - 1] + 1;
        if (tallies[1] === 1
            && tallies[2] === 1
            && tallies[3] === 1
            && tallies[4] === 1
            && tallies[5] === 1) return 20;
        return 0;
    }
}

module.exports = Yatzy;
