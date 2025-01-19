import { combineRgb } from '@companion-module/base'

export function getFeedbacks() {
	const feedbacks = {}

	const ColorWhite = combineRgb(255, 255, 255)
	const ColorGreen = combineRgb(0, 200, 0)
	const ColorOrange = combineRgb(255, 102, 0)

	feedbacks['featuredActive'] = {
		type: 'boolean',
		name: 'Featured Message Active',
		description: 'If there is an active featured message, change the style of the button',
		defaultStyle: {
			color: ColorWhite,
			bgcolor: ColorGreen,
		},
		options: [],
		callback: () => {
			return this.states.featured
		},
	}
	feedbacks['queueSize'] = {
		type: 'boolean',
		name: 'Queue Size',
		description: 'If queue size is above a specific number, change the style of the button',
		defaultStyle: {
			color: ColorWhite,
			bgcolor: ColorOrange,
		},
		options: [
			{
				type: 'number',
				label: 'Queue Size Threshold',
				id: 'threshold',
				default: 5,
				min: 0,
			},
		],
		callback: (feedback) => {
			return this.states.queueLength > feedback.options.threshold
		},
	}

	return feedbacks
}
