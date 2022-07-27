import {
  objectToString,
  prepareClause,
  objectToGraphqlString,
} from "../actions/processor.js";

export const prepareQuery = (config) => {
  const template = getTempate(config);
  let res;
  if (template.arguments.length) {
    const argument_list = [];
    template.arguments.forEach((arg) => {
      argument_list.push(objectToString(arg));
    });
    res = `(${argument_list.join(",")})`;
  }

  if (template.params) {
    res = `${res} ${template.params}`;
  }
  return `${config.write ? "mutation" : "query"} ${config.name} {${
    config.function
  }${res}}`;
};

export const getTempate = (config) => {
  let res = {};
  res.arguments = [];

  // dstinction
  if (config.distinct) {
    res.arguments.push({ distinct_on: config.distinct });
  }

  // limit
  if (config.limit) {
    res.arguments.push({ limit: config.limit });
  }

  // offset
  if (config.offset) {
    res.arguments.push({ offset: config.offset });
  }

  // order_by
  if (config.orderBy) {
    res.arguments.push({ order_by: objectToString(config.orderBy) });
  }

  // where
  if (config.where) {
    res.arguments.push({ where: prepareClause(config.where) });
  }

  // objects
  if (config.objects) {
    res.arguments.push({ objects: config.objects });
  }

  // value
  if (config.value) {
    res.arguments.push({ _set: objectToString(config.value) });
  }

  // return
  if (config.return) {
    res.params = objectToGraphqlString(config.return);
  }

  return res;
};
