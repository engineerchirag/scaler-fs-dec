import { incrementByTwo } from "./utils/math";

test("Test incrementByTwo function", () => {
    const value = incrementByTwo(5);
    expect(value).toBe(7);
});