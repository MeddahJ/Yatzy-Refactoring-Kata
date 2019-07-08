/* eslint-disable prefer-arrow-callback */
/* eslint-disable func-names */

const assert = require('assert');
const Yatzy = require('../lib/yatzy');


describe('Chance', function () {
    it('should score the sum of all dice', function () {
        assert.equal(15, new Yatzy(2, 3, 4, 5, 1).chance());
        assert.equal(16, new Yatzy(3, 3, 4, 5, 1).chance());
    });
});

describe('Yatzy', function () {
    it('should score 50 when all dice are equal', function () {
        assert.equal(50, new Yatzy(4, 4, 4, 4, 4).yatzy());
        assert.equal(50, new Yatzy(6, 6, 6, 6, 6).yatzy());
    });

    it('should score 0 with any two different dice', function () {
        assert.equal(0, new Yatzy(6, 6, 6, 6, 3).yatzy());
    });
});

describe('Ones', function () {
    it('should score the sum of ones', function () {
        assert.equal(1, new Yatzy(1, 2, 3, 4, 5).ones());
        assert.equal(2, new Yatzy(1, 2, 1, 4, 5).ones());
        assert.equal(4, new Yatzy(1, 2, 1, 1, 1).ones());
        assert.equal(0, new Yatzy(6, 2, 2, 4, 5).ones());
    });
});

describe('Twos', function () {
    it('should score the sum of twos', function () {
        assert.equal(4, new Yatzy(1, 2, 3, 2, 6).twos());
        assert.equal(10, new Yatzy(2, 2, 2, 2, 2).twos());
        assert.equal(0, new Yatzy(1, 3, 4, 5, 6).twos());
    });
});

describe('Threes', function () {
    it('should score the sum of threes', function () {
        assert.equal(6, new Yatzy(1, 2, 3, 2, 3).threes());
        assert.equal(12, new Yatzy(2, 3, 3, 3, 3).threes());
        assert.equal(0, new Yatzy(1, 2, 4, 5, 6).threes());
    });
});

describe('Fours', function () {
    it('should score the sum of fours', function () {
        assert.equal(12, new Yatzy(4, 4, 4, 5, 5).fours());
        assert.equal(8, new Yatzy(4, 4, 5, 5, 5).fours());
        assert.equal(4, new Yatzy(4, 5, 5, 5, 5).fours());
        assert.equal(0, new Yatzy(1, 2, 3, 5, 6).fours());
    });
});

describe('Fives', function () {
    it('should score the sum of fives', function () {
        assert.equal(10, new Yatzy(4, 4, 4, 5, 5).fives());
        assert.equal(15, new Yatzy(4, 4, 5, 5, 5).fives());
        assert.equal(20, new Yatzy(4, 5, 5, 5, 5).fives());
        assert.equal(0, new Yatzy(1, 2, 3, 4, 6).fives());
    });
});

describe('Sixes', function () {
    it('should score the sum of sixes', function () {
        assert.equal(6, new Yatzy(4, 4, 6, 5, 5).sixes());
        assert.equal(18, new Yatzy(6, 5, 6, 6, 5).sixes());
        assert.equal(0, new Yatzy(1, 2, 3, 4, 5).sixes());
    });
});

describe('One pair', function () {
    it('should score the sum of the highest pair', function () {
        assert.equal(6, new Yatzy(3, 4, 3, 5, 6).pair());
        assert.equal(10, new Yatzy(5, 3, 3, 3, 5).pair());
        assert.equal(12, new Yatzy(5, 3, 6, 6, 5).pair());
    });

    it('should score 0 without any pair', function () {
        assert.equal(0, new Yatzy(1, 2, 3, 4, 5).pair());
    });
});

describe('Two pairs', function () {
    it('should score the sum of the two pairs', function () {
        assert.equal(16, new Yatzy(3, 3, 5, 4, 5).twoPairs());
        assert.equal(16, new Yatzy(3, 3, 5, 5, 5).twoPairs());
    });

    it('should score 0 without any two pairs', function () {
        assert.equal(0, new Yatzy(1, 2, 3, 4, 5).twoPairs());
    });
});

describe('Three of a kind', function () {
    it('should score the sum of the three of the kind', function () {
        assert.equal(9, new Yatzy(3, 3, 3, 4, 5).threeOfAKind());
        assert.equal(15, new Yatzy(5, 3, 5, 4, 5).threeOfAKind());
        assert.equal(9, new Yatzy(3, 3, 3, 3, 5).threeOfAKind());
    });

    it('should score 0 without any three of the kind', function () {
        assert.equal(0, new Yatzy(1, 2, 3, 4, 5).threeOfAKind());
    });
});

describe('Four of a kind', function () {
    it('should score the sum of the four of the kind', function () {
        assert.equal(12, new Yatzy(3, 3, 3, 3, 5).fourOfAKind());
        assert.equal(20, new Yatzy(5, 5, 5, 4, 5).fourOfAKind());
        assert.equal(12, new Yatzy(3, 3, 3, 3, 3).fourOfAKind());
    });

    it('should score 0 without any four of the kind', function () {
        assert.equal(0, new Yatzy(1, 2, 3, 4, 5).fourOfAKind());
    });
});

describe('Small straight', function () {
    it('should score 15 when dice form a small straight', function () {
        assert.equal(15, new Yatzy(1, 2, 3, 4, 5).smallStraight());
        assert.equal(15, new Yatzy(2, 3, 4, 5, 1).smallStraight());
    });

    it('should score 0 without any small straight', function () {
        assert.equal(0, new Yatzy(1, 2, 2, 4, 5).smallStraight());
    });
});

describe('Large straight', function () {
    it('should score 20 when dice form a large straight', function () {
        assert.equal(20, new Yatzy(6, 2, 3, 4, 5).largeStraight());
        assert.equal(20, new Yatzy(2, 3, 4, 5, 6).largeStraight());
    });

    it('should score 0 without any large straight', function () {
        assert.equal(0, new Yatzy(1, 2, 2, 4, 5).largeStraight());
    });
});

describe('Full house', function () {
    it('should score the sum of the full house', function () {
        assert.equal(18, new Yatzy(6, 2, 2, 2, 6).fullHouse());
    });

    it('should score 0 without any full house', function () {
        assert.equal(0, new Yatzy(2, 3, 4, 5, 6).fullHouse());
    });
});
