import { colors, defaultTiTle, defaultTheme } from "./conf"

const log = (text, theme = defaultTheme, title = defaultTiTle) => {
	const white = colors.white
	const color = colors[theme]
	const lightColor = colors[`${theme}light`]
	const darkColor = colors[`${theme}dark`]
	console.log(
		`%c${title}%c${text}`,
		`
		padding: 2px 5px;
		border-radius: 5px 0 0 5px;
		color: ${white};
		background:${color}
	`,
		`
		padding: 2px 5px;
		border-radius: 0 5px 5px 0;
		color: ${darkColor};
		background: ${lightColor};
	`
	)
	return text
}

export default log
