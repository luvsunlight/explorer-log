import log from "../dist/test.js"

log("normal")

log("change title", { title: "dev" })

log("change borderRadius", { borderRadius: "0" })

log("default theme", {})

log("theme red", { theme: "red" })

log("theme green", { theme: "green" })

log("theme orange", { theme: "orange" })

log("theme grey", { theme: "grey" })

log("custom theme", { theme: "#7158e2" })

log("custom theme", {
	prefixColor: "blue",
	prefixBg: "yellow",
	suffixColor: "white",
	suffixBg: "grey"
})
