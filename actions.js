export function getActions() {
	let actions = {
		clearOverlay: {
			name: 'Clear featured message',
			description: 'Clear the currently featured message from the overlay',
			options: [],
			callback: () => {
				this.sendRequest('clearOverlay', false)
			},
		},
		clearAll: {
			name: 'Clear all messages',
			description: 'Clear all non-pinned messages from the overlay',
			options: [],
			callback: () => {
				this.sendRequest('clearAll', false)
			},
		},
		nextInQueue: {
			name: 'Next in queue',
			description: 'Advance to the next featured message in the queue',
			options: [],
			callback: () => {
				this.sendRequest('nextInQueue', false)
			},
		},
		autoShow: {
			name: 'Toggle auto-show',
			description: 'Toggle auto-featuring messages as they come in',
			options: [],
			callback: () => {
				this.sendRequest('autoShow', 'toggle')
			},
		},
		feature: {
			name: 'Feature next un-featured',
			description: 'Feature th next un-featured message',
			options: [],
			callback: () => {
				this.sendRequest('feature', 'true')
			},
		},
		resetPoll: {
			name: 'Reset Poll',
			description: 'Reset the current poll results',
			options: [],
			callback: () => {
				this.sendRequest('resetpoll')
			},
		},
		closePoll: {
			name: 'Close Poll',
			description: 'Close the current poll and display the results',
			options: [],
			callback: () => {
				this.sendRequest('closepoll')
			},
		},
		waitlistControls: {
			name: 'Waitlist Controls',
			description: 'Manage the current waitlist',
			options: [
				{
					type: 'dropdown',
					label: 'Action',
					id: 'value',
					default: 'removefromwaitlist',
					choices: [
						{ id: 'removefromwaitlist', label: 'Remove First from Waitlist' },
						{ id: 'highlightwaitlist', label: 'Highlight First in Waitlist' },
						{ id: 'resetwaitlist', label: 'Reset Waitlist' },
						{ id: 'downloadwaitlist', label: 'Download Waitlist' },
						{ id: 'selectwinner', label: 'Select Winner' },
						{ id: 'stopentries', label: 'Stop Entires' },
					],
				},
			],
			callback: (action) => {
				let num = null
				if (action.options.value === 'removefromwaitlist' || action.options.value === 'highlightwaitlist') {
					num = 1
				}
				this.sendRequest(`${action.options.value}`, num)
			},
		},
		tts: {
			name: 'Text to Speech (TTS)',
			description: 'Turn on/off the text to speech feature',
			options: [
				{
					type: 'dropdown',
					label: 'Channel',
					id: 'channel',
					default: 'dock',
					choices: [
						{ id: 1, label: 'Dock / Dashboard' },
						{ id: 2, label: 'Featured Chat' },
					],
				},
				{
					type: 'dropdown',
					label: 'Action',
					id: 'value',
					default: 'toggle',
					choices: [
						{ id: 'toggle', label: 'Toggle' },
						{ id: 'on', label: 'On' },
						{ id: 'off', label: 'Off' }
					],
				},
			],
			callback: (action) => {
				this.sendRequest('tts', `${action.options.value}`, `${action.options.channel}`)
			},
		},
	}
	return actions
}
