import * as all_queries from './queries_v2';

export const getQueryObject = () => {
	const res = [];
	const query_names = process.env.QUERY_TO_TEST.split(',');
	query_names.forEach((qn) => {
		res.push(all_queries[qn]);
	});
	return res;
};
// const url = process.env.API_SERVER;
// // ####################### FETCH QUERIES ##############################

// console.log('Query Processing Starts');

// submit(fetchFilterData.getAllTags, url, undefined, true)
// 	.then((res) =>
// 		console.log(`Result (getAllTags): Total rows retrieved ${res.length}`)
// 	)
// 	.catch((e) => console.error(`ERROR: (getAllTags) ${e}`));

// submit(fetchFilterData.getAllLevels, url, undefined, true)
// 	.then((res) =>
// 		console.log(`Result (getAllLevels): Total rows retrieved ${res.length}`)
// 	)
// 	.catch((e) => console.error(`ERROR: (getAllLevels) ${e}`));

// submit(fetchFilterData.getAllUsers, url, undefined, true)
// 	.then((res) =>
// 		console.log(`Result (getAllUsers): Total rows retrieved ${res.length}`)
// 	)
// 	.catch((e) => console.error(`ERROR: (getAllUsers) ${e}`));

// console.log('fetch-plays-filter -------------------');

// submit(FetchPlaysFilter.getAllFeaturedPlays(), url, undefined, true)
// 	.then((res) =>
// 		console.log(
// 			`Result (getAllFeaturedPlays): Total rows retrieved ${res.length}`
// 		)
// 	)
// 	.catch((e) => console.error(`ERROR: (getAllFeaturedPlays) ${e}`));

// submit(
// 	FetchPlaysFilter.filterPlaysBySearchString({ name: 'why' }),
// 	url,
// 	undefined,
// 	true
// )
// 	.then((res) =>
// 		console.log(
// 			`Result (filterPlaysBySearchString): Total rows retrieved ${res.length}`
// 		)
// 	)
// 	.catch((e) => console.error(`ERROR: (filterPlaysBySearchString) ${e}`));

// // console.log("-------------------------------");

// submit(FetchPlaysPaginated, url, undefined, true)
// 	.then((res) =>
// 		console.log(
// 			`Result (FetchPlaysPaginated): Total rows retrieved ${res.length}`
// 		)
// 	)
// 	.catch((e) => console.error(`ERROR: (FetchPlaysPaginated) ${e}`));

// submit(FetchPlaysSorted, url, undefined, true)
// 	.then((res) =>
// 		console.log(
// 			`Result (FetchPlaysSorted): Total rows retrieved ${res.length}`
// 		)
// 	)
// 	.catch((e) => console.error(`ERROR: (FetchPlaysSorted) ${e}`));

// submit(FetchPlaysSimple, url, undefined, true)
// 	.then((res) =>
// 		console.log(
// 			`Result (FetchPlaysSimple): Total rows retrieved ${res.length}`
// 		)
// 	)
// 	.catch((e) => console.error(`ERROR: (FetchPlaysSimple) ${e}`));
