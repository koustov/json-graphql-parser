import * as all_queries from "./queries_v2";

export const getQueryObject = () => {
  const res = [];
  const query_names = process.env.QUERY_TO_TEST.split(",");
  const query_arg = process.env.QUERY_ARGS.split(",");
  query_names.forEach((qn) => {
    res.push({
      name: qn,
      value: all_queries[qn],
      args: query_arg,
    });
  });
  return res;
};
