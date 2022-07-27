import { processLabels, processObject, processObjects } from "./processor";

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
