export function getVariables() {
	const variables = []

	variables.push(
		{ variableId: `queue_size`, name: `Queue Size` },
		{ variableId: `featured_username`, name: `Featured Chat: Username` },
		{ variableId: `featured_message`, name: `Featured Chat: Message` },
	)

	return variables
}

export function updateVariables() {}
