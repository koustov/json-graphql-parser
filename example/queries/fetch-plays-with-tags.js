export const filterWithTags = {
  display: "Filter plays by level, user, language, and multiple tags",
  name: "Fetch_Plays",
  function: "plays",
  write: false,
  return: [
    "component",
    "cover",
    "description",
    "featured",
    "dev_mode",
    "github",
    "language",
    {
      play_like: ["liked", "play_id", "user_id"],
    },
    "name",
    "slug",
    {
      user: ["id", "displayName", "avatarUrl"],
    },
    "created_at",
  ],
  orderBy: {
    created_at: "desc",
  },
  where: {
    clause: {
      operator: "and",
      conditions: [
        {
          field: "level_id",
          operator: "eq",
          value: "2af38a32-37a7-4456-b21b-bf6b3aedd804",
        },
        {
          field: "tag_id",
          operator: "eq",
          value: "1b4439df-ff51-4ead-87ec-ed8799657ce7",
          class: "play_tags",
        },
      ],
    },
  },
};
