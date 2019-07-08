import com.google.common.collect.HashMultiset;
import com.google.common.collect.Multiset;

import java.util.HashSet;
import java.util.List;
import java.util.stream.IntStream;

import static com.google.common.collect.Sets.newHashSet;
import static com.google.common.primitives.Ints.asList;
import static java.util.Comparator.naturalOrder;
import static java.util.stream.Collectors.toList;

public class Yatzy {

    protected int[] dice;

    public Yatzy(int d1, int d2, int d3, int d4, int d5) {
        dice = new int[5];
        dice[0] = d1;
        dice[1] = d2;
        dice[2] = d3;
        dice[3] = d4;
        dice[4] = d5;
    }

    public int chance() {
        return IntStream.of(dice).sum();
    }

    public int yatzy() {
        return IntStream.of(dice).distinct().count() == 1 ? 50 : 0;
    }

    public int ones() {
        return sumDiceWithValue(1);
    }

    public int twos() {
        return sumDiceWithValue(2);
    }

    public int threes() {
        return sumDiceWithValue(3);
    }

    public int fours() {
        return sumDiceWithValue(4);
    }

    public int fives() {
        return sumDiceWithValue(5);
    }

    public int sixes() {
        return sumDiceWithValue(6);
    }

    private int sumDiceWithValue(Integer dieValue) {
        return IntStream.of(dice).filter(dieValue::equals).sum();
    }

    public int pair() {
        return sumDiceOccurring(2);
    }

    public int threeOfAKind() {
        return sumDiceOccurring(3);
    }

    public int fourOfAKind() {
        return sumDiceOccurring(4);
    }

    private int sumDiceOccurring(int occurrences) {
        Multiset<Integer> diceBag = HashMultiset.create(asList(dice));

        return diceBag.elementSet().stream()
                .filter(die -> diceBag.count(die) >= occurrences)
                .max(naturalOrder())
                .orElse(0) * occurrences;
    }

    public int twoPairs() {
        Multiset<Integer> diceBag = HashMultiset.create(asList(dice));

        List<Integer> pairs = diceBag.elementSet().stream()
                .filter(die -> diceBag.count(die) >= 2)
                .limit(2)
                .collect(toList());

        return pairs.size() == 2 ? (pairs.get(0) + pairs.get(1)) * 2 : 0;
    }

    public int smallStraight() {
        // Only one dice roll will yield this sum
        return chance() == 15 ? 15 : 0;
    }

    public int largeStraight() {
        // Only one dice roll will yield this sum
        return chance() == 20 ? 20 : 0;
    }

    public int fullHouse() {
        int[] tallies;
        boolean _2 = false;
        int i;
        int _2_at = 0;
        boolean _3 = false;
        int _3_at = 0;


        tallies = new int[6];
        tallies[dice[0] - 1] += 1;
        tallies[dice[1] - 1] += 1;
        tallies[dice[2] - 1] += 1;
        tallies[dice[3] - 1] += 1;
        tallies[dice[4] - 1] += 1;

        for (i = 0; i != 6; i += 1)
            if (tallies[i] == 2) {
                _2 = true;
                _2_at = i + 1;
            }

        for (i = 0; i != 6; i += 1)
            if (tallies[i] == 3) {
                _3 = true;
                _3_at = i + 1;
            }

        if (_2 && _3)
            return _2_at * 2 + _3_at * 3;
        else
            return 0;
    }
}
