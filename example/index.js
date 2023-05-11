import { submit, validate_object, submit_gql } from "../v2/index.js";
import dotenv from "dotenv";
dotenv.config({ path: ".env" });

import { getQueryObject } from "./_test_data.js";

const url = process.env.API_SERVER;

const execute = async (query_object) => {
  if (
    !query_object.name.endsWith("_raw") &&
    typeof query_object.value !== "function"
  ) {
    console.log(
      `Validating object: ${
        query_object.value.query
          ? query_object.value.query.display
          : query_object.name
      }`
    );
    console.log(validate_object(query_object.query));
  }
  let res = undefined;

  if (typeof query_object.value === "function") {
    console.log(query_object.value);
    console.log(
      JSON.stringify(query_object.value(...query_object.args), undefined, 2)
    );
    console.log("--------------");
    res = await submit(
      query_object.value(...query_object.args),
      url,
      undefined,
      true
    );
  } else if (query_object.name.endsWith("_raw")) {
    res = await submit_gql(query_object.value, url, undefined, false);
  } else {
    res = await submit(query_object.value.query, url, undefined, false);
  }

  if (query_object.value.post_process) {
    console.log(
      `>>> Result >>> ${
        query_object.value.query
          ? query_object.value.query.display
          : query_object.name
      } :  ${query_object.value.post_process(res)}`
    );
  } else {
    console.log(
      `>>> Result >>> ${query_object.value.query?.display} :  ${res}`
    );
  }
};

const main = async () => {
  const query_objects = getQueryObject();
  query_objects.forEach(async (qo, index) => {
    console.log(
      `-------------------- Executing ${index + 1} of ${query_objects.length}`
    );

    await execute(qo);
  });
};

await main();
