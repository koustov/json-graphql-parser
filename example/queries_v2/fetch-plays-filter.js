export const FetchPlaysFilter = {
  // Filter all the featured plays
  getAllFeaturedPlays: () => {
    return {
      display: "Filter all the featured plays",
      name: "Fetch_Plays",
      function: "plays",
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
      where: {
        clause: {
          operator: "",
          class: "",
          conditions: [
            {
              field: "featured",
              operator: "eq",
              value: true,
            },
          ],
        },
      },
    };
  },
  // Filter Plays by a search string in name or description
  filterPlaysBySearchString: (Obj) => {
    return {
      display: "Filter Plays by a search string in name or description",
      name: "Fetch_Plays",
      function: "plays",
      params: [
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
      where: {
        clause: {
          operator: "or",
          class: "",
          conditions: [
            {
              field: "name",
              operator: "iregex",
              value: Obj.name,
            },
            {
              field: "description",
              operator: "iregex",
              value: Obj.name,
            },
          ],
        },
      },
      return: ["id"],
    };
  },
};
