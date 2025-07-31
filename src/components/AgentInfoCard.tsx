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
				alt={`${name} avatar`}
				style={{
					width: '60%',
					height: '60%',
				}}
			/>
			<div style={{ textAlign: 'center', marginTop: '10px' }}>
				<h2>{name}</h2>
				<p>{role}</p>
			</div>
		</div>
	);
}
