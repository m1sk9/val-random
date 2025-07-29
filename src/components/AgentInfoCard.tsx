export default function AgentInfoCard({
	name,
	role,
	avatarUUID,
}: {
	name: string;
	role: string;
	avatarUUID: string;
}) {
	return (
		<div
			style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
		>
			<img
				src={`https://titles.trackercdn.com/valorant-api/agents/${avatarUUID}/displayicon.png`}
				alt="Agent Avatar"
				style={{
					width: '60%',
					height: '60%',
				}}
			/>
			<div id="agent-info" style={{ textAlign: 'center', marginTop: '10px' }}>
				<h2 id="agent-name">{name}</h2>
				<p id="agent-role">{role}</p>
			</div>
		</div>
	);
}
