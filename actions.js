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
						{ id: 'off', label: 'Off' },
					],
				},
			],
			callback: (action) => {
				this.sendRequest('tts', `${action.options.value}`, `${action.options.channel}`)
			},
		},
		sendChat: {
			name: 'Send Chat Message',
			description: 'Send a message to the chat, with various parameters',
			options: [
				{ type: 'textinput', label: 'Username', id: 'chatname', default: 'User', useVariables: true },
				{ type: 'textinput', label: 'Message', id: 'chatmessage', default: 'This is a message!', useVariables: true },
				{
					type: 'dropdown',
					label: 'Service Icon',
					tooltip: 'Service icon will display next to the username',
					id: 'type',
					default: '',
					choices: [
						{ id: '', label: 'None' },
						{ id: 'twitch', label: 'Twitch' },
						{ id: 'youtube', label: 'YouTube' },
						{ id: 'facebook', label: 'Facebook' },
						{ id: 'discord', label: 'Discord' },
						{ id: 'slack', label: 'Slack' },
						{ id: 'zoom', label: 'Zoom' },
					],
				},
				{
					type: 'textinput',
					label: 'User Avatar (Image URL)',
					tooltip: 'Optional, will use default if left blank',
					id: 'chatimg',
					default: 'https://avatars.githubusercontent.com/u/98669070?v=4',
					useVariables: true,
				},
				{
					type: 'checkbox',
					label: 'Question',
					tooltip: 'Adds question styling to the chat message',
					id: 'question',
					default: false,
				},
			],
			callback: async (action) => {
				let chat = {
					chatname: await this.parseVariablesInString(action.options.chatname),
					chatmessage: await this.parseVariablesInString(action.options.chatmessage),
					type: action.options.type,
					chatimg: await this.parseVariablesInString(action.options.chatimg),
					question: action.options.question,
				}
				try {
					chat = JSON.stringify(chat)
				} catch (e) {
					this.log('error', `Error creating JSON from chat data: ${e}`)
					return
				}
				this.sendRequest('extContent', `${chat}`)
			},
		},
	}
	return actions
}
