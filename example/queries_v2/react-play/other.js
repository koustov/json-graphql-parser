export const FetchAllTags = {
	query: {
		display: 'Play Tags',
		name: 'Fetch_Tags',
		function: 'plays',
		return: [{ play_tags: { tag: ['id', 'name'] } }],
		distinct: 'id',
	},
	post_process: (res) => {
		return res.length;
	},
};
export const FetchAllLevels = {
	query: {
		display: 'Play Levels',
		name: 'Fetch_Levels',
		function: 'plays',
		write: false,
		return: [{ level: ['id', 'name'] }],
		distinct: 'level_id',
	},
	post_process: (res) => {
		return res.length;
	},
};

export const FetchAllUsers = {
	query: {
		display: 'Play Users',
		name: 'Fetch_Users',
		function: 'plays',
		write: false,
		return: [{ user: ['avatarUrl', 'displayName', 'id'] }],
		distinct: 'owner_user_id',
	},
	post_process: (res) => {
		return res.length;
	},
};
