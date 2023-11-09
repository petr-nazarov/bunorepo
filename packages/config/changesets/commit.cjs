const commit = require("@changesets/cli/commit");

const getAddMessage = async (changeset, options) => {
	const skipCI =
		(options === null || options === void 0 ? void 0 : options.skipCI) ===
			"add" ||
		(options === null || options === void 0 ? void 0 : options.skipCI) === true;
	const msg = `docs(changeset): ${changeset.summary}${
		skipCI ? "\n\n[skip ci]\n" : ""
	}`;
	console.log(msg);
	return msg;
};
const getVersionMessage = async (releasePlan, options) => {
	const skipCI =
		(options === null || options === void 0 ? void 0 : options.skipCI) ===
			"version" ||
		(options === null || options === void 0 ? void 0 : options.skipCI) === true;
	const publishableReleases = releasePlan.releases.filter(
		(release) => release.type !== "none",
	);
	const numPackagesReleased = publishableReleases.length;
	const releasesLines = publishableReleases
		.map((release) => `  ${release.name}@${release.newVersion}`)
		.join("\n");
	const msg = `chore(release): releasing ${numPackagesReleased} package(s)

    releases:
    ${releasesLines}
    ${skipCI ? "\n[skip ci]\n" : ""}
`;
	console.log(msg);
	return msg;
};

module.exports = {
	getAddMessage: getAddMessage,
	getVersionMessage: getVersionMessage,
};
