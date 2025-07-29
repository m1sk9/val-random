export enum AgentRole {
	DUELIST = 'Duelist', // デュエリスト
	CONTROLLER = 'Controller', // コントローラー
	INITIATOR = 'Initiator', // イニシエーター
	SENTINEL = 'Sentinel', // センチネル
}

export interface AgentData {
	name: string;
	role: AgentRole;
	/**
	 * アバターの URL は基本的に Tracker Network 内で使用されている CDN のものを使用しているが，
	 * ここでの UUID は特定エージェントに紐づく UUID である．
	 * 例: https://titles.trackercdn.com/valorant-api/agents/1dbf2edd-4729-0984-3115-daa5eed44993/displayicon.png (この場合はクローヴ)
	 */
	avatarUUID: string;
}
