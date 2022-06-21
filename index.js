import { submit_multi, submit } from "./request.js";
import { FetchPlaysFilter } from "./fetch-plays-filter.js";
import { FetchPlaysPaginated } from "./fetch-plays-paginated.js";
import { FetchPlaysSorted } from "./fetch-plays-sorted.js";

import { FetchPlaysSimple } from "./fetch-plays.js";

const BACKEND_URL = "https://rgkjmwftqtbpayoyolwh.nhost.run/v1/graphql";
const allRequests = [
  ...FetchPlaysFilter,
  ...FetchPlaysPaginated,
  ...FetchPlaysSorted,
  ...FetchPlaysSimple,
];
submit_multi(allRequests, BACKEND_URL).then((res) => {
  console.log(`Type of result : ${typeof res}`);
  res.forEach((element, ind) => {
    console.log(`${allRequests[ind].display}: ${element.length}`);
  });
});

submit(FetchPlaysSimple[0], BACKEND_URL).then((res) => {
  console.log(`Type of result : ${typeof res}`);
  console.log(`${FetchPlaysSimple[0].display}: ${res.length}`);
});
