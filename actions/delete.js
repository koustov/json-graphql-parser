import { prepareClause, processLabels } from "./processor";
const single_delete_query_template = `mutation %MUTATION_LABEL% {%MUTATION_WHERE%}`;

export const deleteObjects = (config) => {
  res = processLabels(res, config);
  res = res.replace("%MUTATION_WHERE%", prepareClause(config));
  return res;
};
