export function getVariables() {
	const variables = []

	variables.push(
		{ variableId: `featured_message`, name: `Featured Chat: Message` },
		{ variableId: `featured_username`, name: `Featured Chat: Username` },
		{ variableId: `queue_size`, name: `Queue Size` },
	)

	return variables
}

export function updateVariables() {}
