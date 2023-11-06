import { describe, expect, test } from "bun:test";
import { add } from "../src/index";

describe("arithmetic", () => {
	test("2 + 2", () => {
		expect(add(2, 2)).toBe(2);
	});
});
