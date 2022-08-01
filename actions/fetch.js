import { processLabels, processObject, processObjects } from "./processor";
// query MyQuery {
//   play_like(distinct_on: created_at, limit: 10, offset: 10, order_by: {id: asc, liked: asc}, where: {_and: {play_id: {_eq: "123"}}}) {
//     created_at
//     id
//     liked
//     play_id
//   }
// }
const single_insert_query_template = `mutation %MUTATION_LABEL% {%MUTATION_FUNCTION%(object: {%MUTATION_OBJECT%})}`;
const multiple_insert_query_template = `mutation %MUTATION_LABEL% {
      %MUTATION_FUNCTION%(objects: [%MUTATION_OBJECTS%]) {
        id
      }
    }`;

export const insertObjects = (config) => {
  let res = config.multiple
    ? multiple_insert_query_template
    : single_insert_query_template;
  res = processLabels(res, config);

  if (config.multiple) {
    res = processObjects(res, config);
  } else {
    res = processObject(res, config);
  }
  return res;
};
