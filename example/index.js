import { submit, validate_object } from "../v2/index.js";
import dotenv from "dotenv";
import { fetchFilterData } from "./queries_v2/fetch-filter-data.js";
import { FetchPlaysFilter } from "./queries_v2/fetch-plays-filter.js";
import { FetchPlaysPaginated } from "./queries_v2/fetch-plays-paginated.js";
import { FetchPlaysSorted } from "./queries_v2/fetch-plays-sorted.js";
import { FetchPlaysSimple } from "./queries_v2/fetch-plays.js";
import { AddATag, AddALike } from "./queries_v2/insert.js";
import { UpdateATag } from "./queries_v2/update.js";
import { DeleteATag } from "./queries_v2/delete.js";

dotenv.config({ path: ".env" });

// const url = process.env.API_SERVER;
// // ####################### FETCH QUERIES ##############################

// console.log("Query Processing Starts");

// submit(fetchFilterData.getAllTags, url, undefined, true)
//   .then((res) =>
//     console.log(`Result (getAllTags): Total rows retrieved ${res.length}`)
//   )
//   .catch((e) => console.error(`ERROR: (getAllTags) ${e}`));

// submit(fetchFilterData.getAllLevels, url, undefined, true)
//   .then((res) =>
//     console.log(`Result (getAllLevels): Total rows retrieved ${res.length}`)
//   )
//   .catch((e) => console.error(`ERROR: (getAllLevels) ${e}`));

// submit(fetchFilterData.getAllUsers, url, undefined, true)
//   .then((res) =>
//     console.log(`Result (getAllUsers): Total rows retrieved ${res.length}`)
//   )
//   .catch((e) => console.error(`ERROR: (getAllUsers) ${e}`));

// console.log("fetch-plays-filter -------------------");

// submit(FetchPlaysFilter.getAllFeaturedPlays(), url, undefined, true)
//   .then((res) =>
//     console.log(
//       `Result (getAllFeaturedPlays): Total rows retrieved ${res.length}`
//     )
//   )
//   .catch((e) => console.error(`ERROR: (getAllFeaturedPlays) ${e}`));

// submit(
//   FetchPlaysFilter.filterPlaysBySearchString({ name: "why" }),
//   url,
//   undefined,
//   true
// )
//   .then((res) =>
//     console.log(
//       `Result (filterPlaysBySearchString): Total rows retrieved ${res.length}`
//     )
//   )
//   .catch((e) => console.error(`ERROR: (filterPlaysBySearchString) ${e}`));

// // console.log("-------------------------------");

// submit(FetchPlaysPaginated, url, undefined, true)
//   .then((res) =>
//     console.log(
//       `Result (FetchPlaysPaginated): Total rows retrieved ${res.length}`
//     )
//   )
//   .catch((e) => console.error(`ERROR: (FetchPlaysPaginated) ${e}`));

// submit(FetchPlaysSorted, url, undefined, true)
//   .then((res) =>
//     console.log(`Result (FetchPlaysSorted): Total rows retrieved ${res.length}`)
//   )
//   .catch((e) => console.error(`ERROR: (FetchPlaysSorted) ${e}`));

// submit(FetchPlaysSimple, url, undefined, true)
//   .then((res) =>
//     console.log(`Result (FetchPlaysSimple): Total rows retrieved ${res.length}`)
//   )
//   .catch((e) => console.error(`ERROR: (FetchPlaysSimple) ${e}`));

// ####################### DELETE QUERIES ##############################
// submit(DeleteATag, url, undefined, true)
//   .then((res) =>
//     console.log(`Result (DeleteATag): Total rows retrieved ${res.length}`)
//   )
//   .catch((e) => console.error(`ERROR: (DeleteATag) ${e}`));
// ####################### INSERT QUERIES ##############################

// submit(AddATag, url, undefined, true)
//   .then((res) =>
//     console.log(`Result (AddATag): Total rows retrieved ${res.length}`)
//   )
//   .catch((e) => console.error(`ERROR: (FetchPlaysSimple) ${e}`));

// // NOT WORKING
// submit(AddALike, url, undefined, true)
//   .then((res) =>
//     console.log(`Result (AddALike): Total rows retrieved ${res.length}`)
//   )
//   .catch((e) => console.error(`ERROR: (AddALike) ${e}`));

// ####################### UPDATE QUERIES ##############################
// submit(UpdateATag, url, undefined, true)
//   .then((res) =>
//     console.log(`Result (UpdateATag): Total rows retrieved ${res.length}`)
//   )
//   .catch((e) => console.error(`ERROR: (UpdateATag) ${e}`));

console.log(validate_object(fetchFilterData.getAllTags));
