import org.junit.Test;

import static org.assertj.core.api.Assertions.assertThat;

public class YatzyTest {

    @Test
    public void chance_scores_sum_of_all_dice() {
        assertThat(new Yatzy(2, 3, 4, 5, 1).chance()).isEqualTo(15);
        assertThat(new Yatzy(3, 3, 4, 5, 1).chance()).isEqualTo(16);
    }

    @Test
    public void yatzy_scores_50() {
        assertThat(new Yatzy(4, 4, 4, 4, 4).yatzy()).isEqualTo(50);
        assertThat(new Yatzy(6, 6, 6, 6, 6).yatzy()).isEqualTo(50);
        assertThat(new Yatzy(6, 6, 6, 6, 3).yatzy()).isEqualTo(0);
    }

    @Test
    public void test_1s() {
        assertThat(new Yatzy(1, 2, 3, 4, 5).ones()).isEqualTo(1);
        assertThat(new Yatzy(1, 2, 1, 4, 5).ones()).isEqualTo(2);
        assertThat(new Yatzy(6, 2, 2, 4, 5).ones()).isEqualTo(0);
        assertThat(new Yatzy(1, 2, 1, 1, 1).ones()).isEqualTo(4);
    }

    @Test
    public void test_2s() {
        assertThat(new Yatzy(1, 2, 3, 2, 6).twos()).isEqualTo(4);
        assertThat(new Yatzy(2, 2, 2, 2, 2).twos()).isEqualTo(10);
    }

    @Test
    public void test_threes() {
        assertThat(new Yatzy(1, 2, 3, 2, 3).threes()).isEqualTo(6);
        assertThat(new Yatzy(2, 3, 3, 3, 3).threes()).isEqualTo(12);
    }

    @Test
    public void fours_test() {
        assertThat(new Yatzy(4, 4, 4, 5, 5).fours()).isEqualTo(12);
        assertThat(new Yatzy(4, 4, 5, 5, 5).fours()).isEqualTo(8);
        assertThat(new Yatzy(4, 5, 5, 5, 5).fours()).isEqualTo(4);
    }

    @Test
    public void fives() {
        assertThat(new Yatzy(4, 4, 4, 5, 5).fives()).isEqualTo(10);
        assertThat(new Yatzy(4, 4, 5, 5, 5).fives()).isEqualTo(15);
        assertThat(new Yatzy(4, 5, 5, 5, 5).fives()).isEqualTo(20);
    }

    @Test
    public void sixes_test() {
        assertThat(new Yatzy(4, 4, 4, 5, 5).sixes()).isEqualTo(0);
        assertThat(new Yatzy(4, 4, 6, 5, 5).sixes()).isEqualTo(6);
        assertThat(new Yatzy(6, 5, 6, 6, 5).sixes()).isEqualTo(18);
    }

    @Test
    public void one_pair() {
        assertThat(new Yatzy(3, 4, 3, 5, 6).pair()).isEqualTo(6);
        assertThat(new Yatzy(5, 3, 3, 3, 5).pair()).isEqualTo(10);
        assertThat(new Yatzy(5, 3, 6, 6, 5).pair()).isEqualTo(12);
    }

    @Test
    public void two_pairs() {
        assertThat(new Yatzy(3, 3, 5, 4, 5).twoPairs()).isEqualTo(16);
        assertThat(new Yatzy(3, 3, 5, 5, 5).twoPairs()).isEqualTo(16);
    }

    @Test
    public void three_of_a_kind() {
        assertThat(new Yatzy(3, 3, 3, 4, 5).threeOfAKind()).isEqualTo(9);
        assertThat(new Yatzy(5, 3, 5, 4, 5).threeOfAKind()).isEqualTo(15);
        assertThat(new Yatzy(3, 3, 3, 3, 5).threeOfAKind()).isEqualTo(9);
    }

    @Test
    public void four_of_a_kind() {
        assertThat(new Yatzy(3, 3, 3, 3, 5).fourOfAKind()).isEqualTo(12);
        assertThat(new Yatzy(5, 5, 5, 4, 5).fourOfAKind()).isEqualTo(20);
        assertThat(new Yatzy(3, 3, 3, 3, 3).fourOfAKind()).isEqualTo(12);

    }

    @Test
    public void small_straight() {
        assertThat(new Yatzy(1, 2, 3, 4, 5).smallStraight()).isEqualTo(15);
        assertThat(new Yatzy(2, 3, 4, 5, 1).smallStraight()).isEqualTo(15);
        assertThat(new Yatzy(1, 2, 2, 4, 5).smallStraight()).isEqualTo(0);
    }

    @Test
    public void large_straight() {
        assertThat(new Yatzy(6, 2, 3, 4, 5).largeStraight()).isEqualTo(20);
        assertThat(new Yatzy(2, 3, 4, 5, 6).largeStraight()).isEqualTo(20);
        assertThat(new Yatzy(1, 2, 2, 4, 5).largeStraight()).isEqualTo(0);
    }

    @Test
    public void full_house() {
        assertThat(new Yatzy(6, 2, 2, 2, 6).fullHouse()).isEqualTo(18);
        assertThat(new Yatzy(2, 3, 4, 5, 6).fullHouse()).isEqualTo(0);
    }

}
