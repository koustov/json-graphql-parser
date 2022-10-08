export const FetchPlaysSorted = {
	query: {
		display: 'Sorted play view',
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
		orderBy: { created_at: 'asc' },
	},
	post_process: (res) => {
		return res.length;
	},
};
