import {
  objectToString,
  prepareClause,
  objectToGraphqlString,
} from "../actions/processor.js";

export const prepareQuery = (config) => {
  const template = getTempate(config);

  let res = "";
  if (template.arguments.length) {
    const argument_list = [];
    template.arguments.forEach((arg) => {
      if (typeof arg === "string") {
        argument_list.push(arg);
      } else if (Array.isArray(arg)) {
        argument_list.push(`[${objectsToString(arg)}]`);
      } else if (arg instanceof Object) {
        argument_list.push(`${objectToString(arg)}`);
      }
    });
    res = `(${argument_list
      .join(",")
      .replace(/"'/g, "")
      .replace(/'"/g, "")
      .replace(/'/g, "")
      .replace(/\\/g, "")})`;
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
    res.arguments.push({ distinct_on: `'${config.distinct}'` });
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
    res.arguments.push({
      order_by: `'{${objectToString(config.orderBy, true)}}'`,
    });
  }

  // where
  if (config.where) {
    res.arguments.push({ where: prepareClause(config.where) });
  }

  // objects
  if (config.object) {
    res.arguments.push({ object: config.object });
  }

  // objects
  if (config.objects) {
    res.arguments.push({ objects: config.objects });
  }

  // value
  if (config.value) {
    res.arguments.push({ _set: config.value });
  }

  // custom object
  if (config.custom) {
    res.arguments.push(config.value);
  }

  // return
  if (config.return) {
    res.params = objectToGraphqlString(config.return);
  }

  return res;
};
