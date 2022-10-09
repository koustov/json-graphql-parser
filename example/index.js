import { submit, validate_object } from "../v2/index.js";
import dotenv from "dotenv";
dotenv.config({ path: ".env" });

import { getQueryObject } from "./_test_data.js";

const url = process.env.API_SERVER;

const execute = async (query_object) => {
  console.log(`Validating object: ${query_object.query.display}`);
  console.log(validate_object(query_object.query));
  const res = await submit(query_object.query, url, undefined, false);

  if (query_object.post_process) {
    console.log(
      `>>> Result >>> ${
        query_object.query.display
      } :  ${query_object.post_process(res)}`
    );
  } else {
    console.log(`>>> Result >>> ${query_object.query.display} :  ${res}`);
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
