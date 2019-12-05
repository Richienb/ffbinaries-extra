import test from "ava"
import _ from "lodash"
import ffBinaries from "."

test("main", async (t) => {
    t.true(_.isArray(await ffBinaries.getVersions()))
    t.true(_.isString(await ffBinaries.getLatestVersion()))
    t.true(_.isArray(ffBinaries.supportedPlatforms))
    t.true(_.isString(ffBinaries.currentPlatform))
})
