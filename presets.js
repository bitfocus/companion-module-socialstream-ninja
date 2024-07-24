import { combineRgb } from '@companion-module/base'

export function getPresets() {
	let presets = {}

	const ColorWhite = combineRgb(255, 255, 255)
	const ColorBlack = combineRgb(0, 0, 0)
	const ColorRed = combineRgb(200, 0, 0)
	const ColorGreen = combineRgb(0, 200, 0)
	const ColorYellow = combineRgb(212, 174, 0)

	return presets
}
