export function getActions() {
	let actions = {
		clearOverlay: {
			name: 'Clear Current Featured Message',
			description: 'Clear the currently featured message from the overlay',
			options: [],
			callback: (action) => {
				this.sendRequest('clearOverlay', false)
			},
		},
		clearAll: {
			name: 'Stop and clear all messages',
			description: 'Clear all non-pinned messages from the overlay',
			options: [],
			callback: (action) => {
				this.sendRequest('clearAll', false)
			},
		},
		nextInQueue: {
			name: 'Next in Queue',
			description: 'Advance to the next featured message in the queue',
			options: [],
			callback: (action) => {
				this.sendRequest('nextInQueue', false)
			},
		},
		autoShow: {
			name: 'Toggle auto-show',
			description: 'Toggle auto-featuring messages as they come in',
			options: [],
			callback: (action) => {
				this.sendRequest('autoShow', 'toggle')
			},
		},
		feature: {
			name: 'Feature next un-featured',
			description: 'Feature th next un-featured message',
			options: [],
			callback: (action) => {
				this.sendRequest('feature', 'true')
			},
		},
	}
	return actions
}
