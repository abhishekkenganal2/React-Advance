import { Sum } from "../components/sum.js";

test("Testing the sum of 2 numbers.", () => {
    // This is a test to check if the sum of 2 numbers is correct
    expect(Sum(1, 2)).toBe(3);
});