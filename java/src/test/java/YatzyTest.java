import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.CsvSource;

import static org.assertj.core.api.Assertions.assertThat;

public class YatzyTest {

    @ParameterizedTest
    @CsvSource(value = {
            "2, 3, 4, 5, 1, 15",
            "3, 3, 4, 5, 1, 16"})
    public void chance_scores_sum_of_all_dice(int d1, int d2, int d3, int d4, int d5, int expected) {
        assertThat(new Yatzy(d1, d2, d3, d4, d5).chance()).isEqualTo(expected);
    }

    @ParameterizedTest
    @CsvSource(value = {
            "4, 4, 4, 4, 4, 50",
            "6, 6, 6, 6, 6, 50",
            "6, 6, 6, 6, 3, 0"})
    public void yatzy_scores_50(int d1, int d2, int d3, int d4, int d5, int expected) {
        assertThat(new Yatzy(d1, d2, d3, d4, d5).yatzy()).isEqualTo(expected);
    }

    @ParameterizedTest
    @CsvSource(value = {
            "1, 2, 3, 4, 5, 1",
            "1, 2, 1, 4, 5, 2",
            "6, 2, 2, 4, 5, 0",
            "1, 2, 1, 1, 1, 4"})
    public void test_1s(int d1, int d2, int d3, int d4, int d5, int expected) {
        assertThat(new Yatzy(d1, d2, d3, d4, d5).ones()).isEqualTo(expected);
    }

    @ParameterizedTest
    @CsvSource(value = {
            "1, 2, 3, 2, 6, 4",
            "2, 2, 2, 2, 2, 10"})
    public void test_2s(int d1, int d2, int d3, int d4, int d5, int expected) {
        assertThat(new Yatzy(d1, d2, d3, d4, d5).twos()).isEqualTo(expected);
    }

    @ParameterizedTest
    @CsvSource(value = {
            "1, 2, 3, 2, 3, 6",
            "2, 3, 3, 3, 3, 12"})
    public void test_threes(int d1, int d2, int d3, int d4, int d5, int expected) {
        assertThat(new Yatzy(d1, d2, d3, d4, d5).threes()).isEqualTo(expected);
    }

    @ParameterizedTest
    @CsvSource(value = {
            "4, 4, 4, 5, 5, 12",
            "4, 4, 5, 5, 5, 8",
            "4, 5, 5, 5, 5, 4"})
    public void fours_test(int d1, int d2, int d3, int d4, int d5, int expected) {
        assertThat(new Yatzy(d1, d2, d3, d4, d5).fours()).isEqualTo(expected);
    }

    @ParameterizedTest
    @CsvSource(value = {
            "4, 4, 4, 5, 5, 10",
            "4, 4, 5, 5, 5, 15",
            "4, 5, 5, 5, 5, 20"})
    public void fives(int d1, int d2, int d3, int d4, int d5, int expected) {
        assertThat(new Yatzy(d1, d2, d3, d4, d5).fives()).isEqualTo(expected);
    }

    @ParameterizedTest
    @CsvSource(value = {
            "4, 4, 4, 5, 5, 0",
            "4, 4, 6, 5, 5, 6",
            "6, 5, 6, 6, 5, 18"})
    public void sixes_test(int d1, int d2, int d3, int d4, int d5, int expected) {
        assertThat(new Yatzy(d1, d2, d3, d4, d5).sixes()).isEqualTo(expected);
    }

    @ParameterizedTest
    @CsvSource(value = {
            "3, 4, 3, 5, 6, 6",
            "5, 3, 3, 3, 5, 10",
            "5, 3, 6, 6, 5, 12"})
    public void one_pair(int d1, int d2, int d3, int d4, int d5, int expected) {
        assertThat(new Yatzy(d1, d2, d3, d4, d5).pair()).isEqualTo(expected);
    }

    @ParameterizedTest
    @CsvSource(value = {
            "3, 3, 5, 4, 5, 16",
            "3, 3, 5, 5, 5, 16"})
    public void two_pairs(int d1, int d2, int d3, int d4, int d5, int expected) {
        assertThat(new Yatzy(d1, d2, d3, d4, d5).twoPairs()).isEqualTo(expected);
    }

    @ParameterizedTest
    @CsvSource(value = {
            "3, 3, 3, 4, 5, 9",
            "5, 3, 5, 4, 5, 15",
            "3, 3, 3, 3, 5, 9"})
    public void three_of_a_kind(int d1, int d2, int d3, int d4, int d5, int expected) {
        assertThat(new Yatzy(d1, d2, d3, d4, d5).threeOfAKind()).isEqualTo(expected);
    }

    @ParameterizedTest
    @CsvSource(value = {
            "3, 3, 3, 3, 5, 12",
            "5, 5, 5, 4, 5, 20",
            "3, 3, 3, 3, 3, 12"})
    public void four_of_a_kind(int d1, int d2, int d3, int d4, int d5, int expected) {
        assertThat(new Yatzy(d1, d2, d3, d4, d5).fourOfAKind()).isEqualTo(expected);
    }

    @ParameterizedTest
    @CsvSource(value = {
            "1, 2, 3, 4, 5, 15",
            "2, 3, 4, 5, 1, 15",
            "1, 2, 2, 4, 5, 0"})
    public void small_straight(int d1, int d2, int d3, int d4, int d5, int expected) {
        assertThat(new Yatzy(d1, d2, d3, d4, d5).smallStraight()).isEqualTo(expected);
    }

    @ParameterizedTest
    @CsvSource(value = {
            "6, 2, 3, 4, 5, 20",
            "2, 3, 4, 5, 6, 20",
            "1, 2, 2, 4, 5, 0"})
    public void large_straight(int d1, int d2, int d3, int d4, int d5, int expected) {
        assertThat(new Yatzy(d1, d2, d3, d4, d5).largeStraight()).isEqualTo(expected);
    }

    @ParameterizedTest
    @CsvSource(value = {
            "6, 2, 2, 2, 6, 18",
            "2, 3, 4, 5, 6, 0"})
    public void full_house(int d1, int d2, int d3, int d4, int d5, int expected) {
        assertThat(new Yatzy(d1, d2, d3, d4, d5).fullHouse()).isEqualTo(expected);
    }
}
