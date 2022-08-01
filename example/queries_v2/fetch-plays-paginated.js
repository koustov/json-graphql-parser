export const FetchPlaysPaginated = {
  display: "Paginated play view",
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
  where: {
    clause: {
      conditions: [
        {
          field: "featured",
          operator: "eq",
          value: true,
          type: "boolean",
        },
      ],
    },
  },
  offset: 1,
  limit: 4,
};
