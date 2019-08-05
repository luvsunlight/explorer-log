import { assert } from "chai"
import log from "../src/index"

const msg = "test"

describe("test index.js", () => {
	describe("test log", () => {
		it("以特定形式log字符", () => {
			assert.equal(msg, log(msg))
		})
	})
})
