# explorer-log

> A 'DIY' log to help print beautiful charaters on your explorer.

![https://github.com/luvsunlight/explorer-log/tree/master/screenshots/main.png](main.png)

# Installation

```
npm i -D explorer-log
```

# Usage / Examples

```
import log from "../src/index"

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

```

# Api

log(test, option)

## test (string)

> your log message

## option

|    param     |     desc      |                             type                              | default |
| :----------: | :-----------: | :-----------------------------------------------------------: | :-----: |
|    theme     | theme of log  | enum[blue(default),green,orange,red,grey] / custom color(hex) |  blue   |
|    title     | title of log  |                            String                             | console |
| borderRadius | border-radius |                            String                             |  "5px"  |
| prefixColor  |  prefixColor  |                            String                             |    -    |
|   prefixBg   |   prefixBg    |                            String                             |    -    |
| suffixColor  |  suffixColor  |                            String                             |    -    |
|   suffixBg   |   suffixBg    |                            String                             |    -    |

# License

[https://opensource.org/licenses/MIT](MIT)

Copyright (c) 2019-present, Zhiyuan (prozac) Li
