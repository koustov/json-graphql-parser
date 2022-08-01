import { processLabels, processObject, processObjects } from "./processor";
//   update_play_like(where: {_and: {play_id: {_eq: "123"}, user_id: {_eq: "456"}}}, _set: {liked: false})

const update_query_template = `mutation %MUTATION_LABEL% (%MUTATION_WHERE%, %MUTATION_SET%)`;

export const insertObjects = (config) => {
  let res = update_query_template;

  res = processLabels(res, config);

  return res;
};
