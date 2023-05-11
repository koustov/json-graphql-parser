export const FetchPlaysSimple = {
  query: {
    display: "Simple fetch play",
    name: "Fetch_Plays",
    function: "plays",
    write: false,
    return: [
      "blog",
      "component",
      "cover",
      "created_at",
      "description",
      "featured",
      "github",
      "id",
      "language",
      { level: ["name"] },
      "name",
      "path",
      { play_tags: { tag: ["name"] } },
      "updated_at",
      { user: ["id", "displayName", "avatarUrl"] },
      "video",
    ],
  },
  post_process: (res) => {
    return res.length;
  },
};

export const AllPlaysByUser = {
  query: {
    display: "Fetch play count group by the creator",
    name: "Fetch_Play_By_Users",
    function: "plays",
    return: [
      "created_at",
      {
        user: ["avatarUrl", "displayName", "id", "email"],
      },
    ],
  },
  post_process: (res) => {
    return JSON.stringify(res, undefined, 2);
  },
};
