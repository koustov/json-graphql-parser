export const FetchPlaysBySearchString = {
	query: {
		display: 'Filter Plays by a search string in name or description',
		name: 'Fetch_Play_By_Filter',
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
				operator: 'or',
				class: '',
				conditions: [
					{
						field: 'name',
						operator: 'iregex',
						value: 'this',
					},
					{
						field: 'description',
						operator: 'iregex',
						value: 'this',
					},
				],
			},
		},
	},
	post_process: (res) => {
		return res.length;
	},
};
