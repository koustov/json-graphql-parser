export const FetchPlaysSimple = {
	query: {
		display: 'Simple fetch play',
		name: 'Fetch_Plays',
		function: 'plays',
		write: false,
		return: [
			'blog',
			'component',
			'cover',
			'created_at',
			'description',
			'featured',
			'github',
			'id',
			'language',
			{ level: ['name'] },
			'name',
			'path',
			{ play_tags: { tag: ['name'] } },
			'updated_at',
			{ user: ['id', 'displayName', 'avatarUrl'] },
			'video',
		],
	},
	post_process: (res) => {
		return res.length;
	},
};
