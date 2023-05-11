export const FetchPlayCountByUser = {
  query: {
    display: "Fect play count group by the creator",
    name: "Fetch_Play_By_Users",
    function: "users",
    return: [
      "email",
      "id",
      "displayName",
      "avatarUrl",
      {
        plays_aggregate: [{ aggregate: ["count"] }],
      },
    ],
  },
  post_process: (res) => {
    return JSON.stringify(res, undefined, 2);
  },
};
