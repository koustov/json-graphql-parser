import { config_to_query } from "../index_v2.js";
import { submit } from "../index_v1.js";
import dotenv from "dotenv";
import { AddATag } from "./queries/mutations.js";
import { fetchFilterData } from "./queries_v2/fetch-filter-data.js";
import { FetchPlaysFilter } from "./queries_v2/fetch-plays-filter.js";

dotenv.config({ path: ".env" });

const url = process.env.API_SERVER;
console.log("fetch-filter-data -------------------");
console.log("Query Processing Starts");
let query = config_to_query(fetchFilterData.getAllTags);
submit(query, url, undefined, true)
  .then((res) => console.log(res))
  .catch((e) => console.error(e));
console.log("Query Processing Ends");
console.log(config_to_query(fetchFilterData.getAllLevels));
console.log(config_to_query(fetchFilterData.getAllUsers));
console.log("-------------------------------");

console.log("fetch-plays-filter -------------------");
console.log(config_to_query(FetchPlaysFilter.getAllFeaturedPlays()));
console.log(
  config_to_query(FetchPlaysFilter.filterPlaysBySearchString({ name: "why" }))
);

console.log("-------------------------------");
// submit(AddATag, url)
//   .then((res) => {
//     console.log(JSON.stringify(res, null, 2));
//   })
//   .catch((err) => {
//     console.error(err);
//   });
