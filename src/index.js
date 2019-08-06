import {
	colors,
	defaultTheme,
	defaultTitle,
	defaultBorderRadius,
	defaultLightenFactor,
	defaultDarkenFactor
} from "./conf"
import { lighten, darken } from "./util"

const log = (
	text,
	{
		theme = defaultTheme,
		title = defaultTitle,
		borderRadius = defaultBorderRadius,
		prefixColor = null,
		prefixBg = null,
		suffixColor = null,
		suffixBg = null
	} = {}
) => {
	const white = prefixColor ? prefixColor : colors.white
	const color = prefixBg ? prefixBg : colors[theme] ? colors[theme] : theme
	const lightColor = suffixBg
		? suffixBg
		: lighten(color, defaultLightenFactor)
	const darkColor = suffixColor
		? suffixColor
		: darken(color, defaultDarkenFactor)

	console.log(
		`%c${title}%c${text}`,
		`
		padding: 2px 5px;
		border-radius: ${borderRadius} 0 0 ${borderRadius};
		color: ${white};
		background:${color}
	`,
		`
		padding: 2px 5px;
		border-radius: 0 ${borderRadius} ${borderRadius} 0;
		color: ${darkColor};
		background: ${lightColor};
	`
	)
	return text
}

export default log
