import { describe, expect, test } from "bun:test";
import { add, multiply } from "../src/index";

describe("arithmetic", () => {
	test("2 + 2", () => {
		expect(add(2, 2)).toBe(4);
	});
	test("2 x 2", () => {
		expect(multiply(2, 2)).toBe(4);
	});
});
