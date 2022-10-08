export const FetchAllFeaturedPlays = {
	query: {
		display: 'Filter all the featured plays',
		name: 'Fetch_Plays',
		function: 'plays',
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
		where: {
			clause: {
				operator: '',
				class: '',
				conditions: [
					{
						field: 'featured',
						operator: 'eq',
						value: true,
					},
				],
			},
		},
	},
	post_process: (res) => {
		return `Total row received: ${res.length}`;
	},
};
