String.prototype.colorHex = function() {
	var that = this
	//十六进制颜色值的正则表达式
	var reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/
	// 如果是rgb颜色表示
	if (/^(rgb|RGB)/.test(that)) {
		var aColor = that.replace(/(?:\(|\)|rgb|RGB)*/g, "").split(",")
		var strHex = "#"
		for (var i = 0; i < aColor.length; i++) {
			var hex = Number(aColor[i]).toString(16)
			if (hex.length < 2) {
				hex = "0" + hex
			}
			strHex += hex
		}
		if (strHex.length !== 7) {
			strHex = that
		}
		return strHex
	} else if (reg.test(that)) {
		var aNum = that.replace(/#/, "").split("")
		if (aNum.length === 6) {
			return that
		} else if (aNum.length === 3) {
			var numHex = "#"
			for (var i = 0; i < aNum.length; i += 1) {
				numHex += aNum[i] + aNum[i]
			}
			return numHex
		}
	}
	return that
}

String.prototype.colorRgb = function() {
	var sColor = this.toLowerCase()
	//十六进制颜色值的正则表达式
	var reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/
	// 如果是16进制颜色
	if (sColor && reg.test(sColor)) {
		if (sColor.length === 4) {
			var sColorNew = "#"
			for (var i = 1; i < 4; i += 1) {
				sColorNew += sColor
					.slice(i, i + 1)
					.concat(sColor.slice(i, i + 1))
			}
			sColor = sColorNew
		}
		//处理六位的颜色值
		var sColorChange = []
		for (var i = 1; i < 7; i += 2) {
			sColorChange.push(parseInt("0x" + sColor.slice(i, i + 2)))
		}
		return sColorChange
	}
	return sColor
}

function rgbToHsl(r, g, b) {
	;(r /= 255), (g /= 255), (b /= 255)
	var max = Math.max(r, g, b),
		min = Math.min(r, g, b)
	var h,
		s,
		l = (max + min) / 2

	if (max == min) {
		h = s = 0 // achromatic
	} else {
		var d = max - min
		s = l > 0.5 ? d / (2 - max - min) : d / (max + min)
		switch (max) {
			case r:
				h = (g - b) / d + (g < b ? 6 : 0)
				break
			case g:
				h = (b - r) / d + 2
				break
			case b:
				h = (r - g) / d + 4
				break
		}
		h /= 6
	}

	return [h, s, l]
}

function hslToRgb(h, s, l) {
	var r, g, b

	if (s == 0) {
		r = g = b = l // achromatic
	} else {
		var hue2rgb = function hue2rgb(p, q, t) {
			if (t < 0) t += 1
			if (t > 1) t -= 1
			if (t < 1 / 6) return p + (q - p) * 6 * t
			if (t < 1 / 2) return q
			if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6
			return p
		}

		var q = l < 0.5 ? l * (1 + s) : l + s - l * s
		var p = 2 * l - q
		r = hue2rgb(p, q, h + 1 / 3)
		g = hue2rgb(p, q, h)
		b = hue2rgb(p, q, h - 1 / 3)
	}

	return (
		"RGB(" +
		[Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)].join(
			","
		) +
		")"
	)
}

const lighten = (color, factor) => {
	let rgbColor = color.colorRgb()
	let hsl = rgbToHsl(...rgbColor)
	hsl[2] = Math.min(1.0, hsl[2] + factor)
	return hslToRgb(...hsl)
}

const darken = (color, factor) => {
	let rgbColor = color.colorRgb()
	let hsl = rgbToHsl(...rgbColor)
	hsl[2] = Math.max(0.0, hsl[2] - factor)
	return hslToRgb(...hsl)
}

export { lighten, darken }
