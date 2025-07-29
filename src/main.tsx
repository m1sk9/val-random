import { Box, Button } from '@mui/material';
import { useEffect, useState } from 'react';
import AgentInfoCard from './components/AgentInfoCard';
import type { AgentData } from './types';

export function Main() {
	const [agentsData, setAgentsData] = useState<AgentData[]>([]);
	const [selectedAgent, setSelectedAgent] = useState<AgentData | undefined>(
		undefined,
	);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		const loadAgents = async () => {
			try {
				const res = await fetch(`/agents.json`);
				const data: AgentData[] = await res.json();
				setAgentsData(data);
			} catch (e) {
				console.error('Failed to load agents data:', e);
			}
		};
		loadAgents();
	}, []);

	const pickRandomAgent = () => {
		if (isLoading || agentsData.length === 0) return;
		setIsLoading(true);
		setTimeout(() => {
			const randomIndex = Math.floor(Math.random() * agentsData.length);
			setSelectedAgent(agentsData[randomIndex]);
			setIsLoading(false);
		}, 500);
	};

	return (
		<Box
			sx={{
				minHeight: '100vh',
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'center',
				alignItems: 'center',
				padding: 2,
			}}
		>
			<header
				style={{
					textAlign: 'center',
					marginBottom: '2rem',
				}}
			>
				<h1 style={{ margin: 0, fontSize: '2.5rem' }}>
					<a
						href="https://github.com/m1sk9/val-random"
						style={{ color: 'inherit', textDecoration: 'none' }}
					>
						Valorant Random Agent Selector
					</a>
				</h1>
			</header>
			<Box
				id="agent-box"
				component="section"
				sx={{
					maxWidth: '400px',
					width: '100%',
					minHeight: '450px',
					padding: 4,
					border: '1px solid rgba(255, 255, 255, 0.3)',
					borderRadius: 2,
					backgroundColor: 'rgba(0, 0, 0, 0.3)',
					backdropFilter: 'blur(10px)',
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'space-between',
					alignItems: 'center',
					boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
				}}
			>
				<Box sx={{ flex: 1, display: 'flex', alignItems: 'center' }}>
					{selectedAgent ? (
						<AgentInfoCard
							name={selectedAgent.name}
							role={selectedAgent.role}
							avatarUUID={selectedAgent.avatarUUID}
						/>
					) : (
						<div style={{ textAlign: 'center', opacity: 0.7 }}>
							{isLoading ? 'Selecting...' : 'Click button to pick an agent!'}
						</div>
					)}
				</Box>
				<Button
					variant="contained"
					size="large"
					disabled={isLoading || agentsData.length === 0}
					onClick={pickRandomAgent}
					sx={{
						marginTop: 3,
						paddingX: 4,
						paddingY: 1.5,
						fontSize: '1.1rem',
						borderRadius: 2,
						textTransform: 'none',
						backgroundColor: 'rgba(255, 255, 255, 0.1)',
						backdropFilter: 'blur(10px)',
						border: '1px solid rgba(255, 255, 255, 0.3)',
						'&:hover': {
							backgroundColor: 'rgba(255, 255, 255, 0.2)',
						},
					}}
				>
					{isLoading ? 'Picking...' : 'Picking!'}
				</Button>
			</Box>
			<footer
				style={{
					textAlign: 'center',
					marginBottom: '1rem',
				}}
			>
				<p style={{ margin: 10 }}>
					This web application is a joke and does not affect actual gameplay.{' '}
					<br />
					Please do not use it in Competitive or Premier modes, as it may
					directly impact other players' ranks.
				</p>
				<p style={{ margin: 10 }}>
					Valorant is a trademark of Riot Games, Inc. This web application is
					not affiliated with or endorsed by Riot Games in any way.
				</p>
			</footer>
		</Box>
	);
}
