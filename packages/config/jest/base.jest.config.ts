import { Config } from "@jest/types";

const baseConfig: Config.InitialOptions = {
	passWithNoTests: true,
	verbose: false,
	moduleFileExtensions: ["js", "json", "ts"],
	rootDir: ".",
	testEnvironment: "node",
	testRegex: ".spec.ts$",
	transform: {
		"^.+\\.ts$": "ts-jest",
	},
	modulePathIgnorePatterns: ["test/src/*", "dist/*"],
};
export default baseConfig;
