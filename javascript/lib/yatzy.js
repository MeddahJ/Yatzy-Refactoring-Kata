const Yatzy = function (d1, d2, d3, d4, d5) {
    this.dice = [d1, d2, d3, d4, d5];

    this.fours = function () {
        let sum;
        sum = 0;
        for (let at = 0; at !== 5; at += 1) {
            if (this.dice[at] === 4) {
                sum += 4;
            }
        }
        return sum;
    };

    this.fives = function () {
        let s = 0;
        let i;
        for (i = 0; i < this.dice.length; i += 1) if (this.dice[i] === 5) s += 5;
        return s;
    };

    this.sixes = function () {
        let sum = 0;
        for (let at = 0; at < this.dice.length; at += 1) if (this.dice[at] === 6) sum += 6;
        return sum;
    };
};


Yatzy.chance = function (d1, d2, d3, d4, d5) {
    let total = 0;
    total += d1;
    total += d2;
    total += d3;
    total += d4;
    total += d5;
    return total;
};

Yatzy.yatzy = function (...dice) {
    const counts = [0, 0, 0, 0, 0, 0, 0, 0];
    for (let i = 0; i !== dice.length; i += 1) {
        const die = dice[i];
        counts[die - 1] = counts[die - 1] + 1;
    }
    for (let i = 0; i !== 6; i += 1) if (counts[i] === 5) return 50;
    return 0;
};

Yatzy.ones = function (d1, d2, d3, d4, d5) {
    let sum = 0;
    if (d1 === 1) sum += 1;
    if (d2 === 1) sum += 1;
    if (d3 === 1) sum += 1;
    if (d4 === 1) sum += 1;
    if (d5 === 1) sum += 1;

    return sum;
};

Yatzy.twos = function (d1, d2, d3, d4, d5) {
    let sum = 0;
    if (d1 === 2) sum += 2;
    if (d2 === 2) sum += 2;
    if (d3 === 2) sum += 2;
    if (d4 === 2) sum += 2;
    if (d5 === 2) sum += 2;
    return sum;
};

Yatzy.threes = function (d1, d2, d3, d4, d5) {
    let s;
    s = 0;
    if (d1 === 3) s += 3;
    if (d2 === 3) s += 3;
    if (d3 === 3) s += 3;
    if (d4 === 3) s += 3;
    if (d5 === 3) s += 3;
    return s;
};

Yatzy.score_pair = function (d1, d2, d3, d4, d5) {
    const counts = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    counts[d1 - 1] = counts[d1 - 1] + 1;
    counts[d2 - 1] = counts[d2 - 1] + 1;
    counts[d3 - 1] = counts[d3 - 1] + 1;
    counts[d4 - 1] = counts[d4 - 1] + 1;
    counts[d5 - 1] = counts[d5 - 1] + 1;
    let at;
    for (at = 0; at !== 6; at += 1) if (counts[6 - at - 1] >= 2) return (6 - at) * 2;
    return 0;
};

Yatzy.two_pair = function (d1, d2, d3, d4, d5) {
    const counts = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    counts[d1 - 1] = counts[d1 - 1] + 1;
    counts[d2 - 1] = counts[d2 - 1] + 1;
    counts[d3 - 1] = counts[d3 - 1] + 1;
    counts[d4 - 1] = counts[d4 - 1] + 1;
    counts[d5 - 1] = counts[d5 - 1] + 1;
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
};

Yatzy.four_of_a_kind = function (_1, _2, d3, d4, d5) {
    const tallies = [0, 0, 0, 0, 0, 0, 0, 0];
    tallies[_1 - 1] = tallies[_1 - 1] + 1;
    tallies[_2 - 1] = tallies[_2 - 1] + 1;
    tallies[d3 - 1] = tallies[d3 - 1] + 1;
    tallies[d4 - 1] = tallies[d4 - 1] + 1;
    tallies[d5 - 1] = tallies[d5 - 1] + 1;
    for (let i = 0; i < 6; i += 1) if (tallies[i] >= 4) return (i + 1) * 4;
    return 0;
};

Yatzy.three_of_a_kind = function (d1, d2, d3, d4, d5) {
    const t = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    t[d1 - 1] = t[d1 - 1] + 1;
    t[d2 - 1] = t[d2 - 1] + 1;
    t[d3 - 1] = t[d3 - 1] + 1;
    t[d4 - 1] = t[d4 - 1] + 1;
    t[d5 - 1] = t[d5 - 1] + 1;
    for (let i = 0; i < 6; i += 1) if (t[i] >= 3) return (i + 1) * 3;
    return 0;
};

Yatzy.smallStraight = function (d1, d2, d3, d4, d5) {
    const tallies = [0, 0, 0, 0, 0, 0, 0];
    tallies[d1 - 1] = tallies[d1 - 1] + 1;
    tallies[d2 - 1] = tallies[d2 - 1] + 1;
    tallies[d3 - 1] = tallies[d3 - 1] + 1;
    tallies[d4 - 1] = tallies[d4 - 1] + 1;
    tallies[d5 - 1] = tallies[d5 - 1] + 1;
    if (tallies[0] === 1
        && tallies[1] === 1
        && tallies[2] === 1
        && tallies[3] === 1
        && tallies[4] === 1) return 15;
    return 0;
};

Yatzy.largeStraight = function (d1, d2, d3, d4, d5) {
    const tallies = [0, 0, 0, 0, 0, 0, 0, 0];
    tallies[d1 - 1] = tallies[d1 - 1] + 1;
    tallies[d2 - 1] = tallies[d2 - 1] + 1;
    tallies[d3 - 1] = tallies[d3 - 1] + 1;
    tallies[d4 - 1] = tallies[d4 - 1] + 1;
    tallies[d5 - 1] = tallies[d5 - 1] + 1;
    if (tallies[1] === 1
        && tallies[2] === 1
        && tallies[3] === 1
        && tallies[4] === 1
        && tallies[5] === 1) return 20;
    return 0;
};

Yatzy.fullHouse = function (d1, d2, d3, d4, d5) {
    let _2 = false;
    let i;
    let _2_at = 0;
    let _3 = false;
    let _3_at = 0;


    const tallies = [0, 0, 0, 0, 0, 0, 0, 0];
    tallies[d1 - 1] = tallies[d1 - 1] + 1;
    tallies[d2 - 1] = tallies[d2 - 1] + 1;
    tallies[d3 - 1] = tallies[d3 - 1] + 1;
    tallies[d4 - 1] = tallies[d4 - 1] + 1;
    tallies[d5 - 1] = tallies[d5 - 1] + 1;

    for (i = 0; i !== 6; i += 1) {
        if (tallies[i] === 2) {
            _2 = true;
            _2_at = i + 1;
        }
    }

    for (i = 0; i !== 6; i += 1) {
        if (tallies[i] === 3) {
            _3 = true;
            _3_at = i + 1;
        }
    }

    if (_2 && _3) return _2_at * 2 + _3_at * 3;
    return 0;
};

module.exports = Yatzy;
