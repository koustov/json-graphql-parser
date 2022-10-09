export const fetchPlaysWithMultipleFilter = {
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
          clause: {
            operator: "or",
            conditions: [
              {
                field: "level_id",
                operator: "eq",
                value: "2af38a32-37a7-4456-b21b-bf6b3aedd804",
              },
              {
                field: "level_id",
                operator: "eq",
                value: "4127ed16-bf37-4c34-bed0-282cd646cd53",
              },
            ],
          },
        },
        {
          clause: {
            operator: "or",
            conditions: [
              {
                field: "tag_id",
                operator: "eq",
                value: "914e9491-b1f6-4b90-ad0f-727eabd5a41e",
              },
              {
                field: "tag_id",
                operator: "eq",
                value: "1b4439df-ff51-4ead-87ec-ed8799657ce7",
              },
            ],
            class: "play_tags",
          },
        },
        {
          clause: {
            operator: "or",
            conditions: [
              {
                field: "owner_user_id",
                operator: "eq",
                value: "064218ee-471a-4949-9d39-05d90293b00e",
              },
              {
                field: "owner_user_id",
                operator: "eq",
                value: "0680f581-6584-4bc4-bbe9-aa7c97567e72",
              },
            ],
          },
        },
      ],
    },
  },
};
export const fetchPlaysWithMultipleFilter1 = {
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
          clause: {
            operator: "or",
            conditions: [
              {
                field: "level_id",
                operator: "eq",
                value: "2af38a32-37a7-4456-b21b-bf6b3aedd804",
              },
              {
                field: "level_id",
                operator: "eq",
                value: "4127ed16-bf37-4c34-bed0-282cd646cd53",
              },
            ],
          },
        },
        {
          clause: {
            operator: "or",
            conditions: [
              {
                field: "tag_id",
                operator: "eq",
                value: "cb2bf8d1-1c91-45c6-8351-59f49aca857b",
              },
              {
                field: "tag_id",
                operator: "eq",
                value: "3a5281c7-d476-40ab-b7ed-2511e923d648",
              },
            ],
            class: "play_tags",
          },
        },
        {
          clause: {
            operator: "or",
            conditions: [
              {
                field: "owner_user_id",
                operator: "eq",
                value: "841707ca-2b3b-4093-9c1b-11e7cb23da06",
              },
              {
                field: "owner_user_id",
                operator: "eq",
                value: "0680f581-6584-4bc4-bbe9-aa7c97567e72",
              },
            ],
          },
        },
        {
          field: "language",
          operator: "eq",
          value: "js",
        },
      ],
    },
  },
};
export const oneTag = {
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
          field: "tag_id",
          operator: "eq",
          value: "47425bdb-9167-4642-bd90-73aae6efcdb3",
          class: "play_tags",
        },
      ],
    },
  },
};
export const oneLevelOneTag = {
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
          value: "47425bdb-9167-4642-bd90-73aae6efcdb3",
          class: "play_tags",
        },
      ],
    },
  },
};
export const oneLevelTwoTags = {
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
          clause: {
            operator: "or",
            conditions: [
              {
                field: "tag_id",
                operator: "eq",
                value: "47425bdb-9167-4642-bd90-73aae6efcdb3",
              },
              {
                field: "tag_id",
                operator: "eq",
                value: "5aba7c38-d131-4bf9-9a74-db01a31e7c2b",
              },
            ],
            class: "play_tags",
          },
        },
      ],
    },
  },
};

export const twoTags = {
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
          clause: {
            operator: "or",
            conditions: [
              {
                field: "tag_id",
                operator: "eq",
                value: "0c08fabf-0032-4ec7-bda3-e45ecb01112c",
              },
              {
                field: "tag_id",
                operator: "eq",
                value: "3e21eb36-b610-41e9-a89e-87c1bec293a3",
              },
            ],
            class: "play_tags",
          },
        },
      ],
    },
  },
};

export const oneLevelOneCreator = {
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
          value: "bed3cf3f-d7e1-4094-ae07-c3dcde899bc7",
        },
        {
          field: "owner_user_id",
          operator: "eq",
          value: "0680f581-6584-4bc4-bbe9-aa7c97567e72",
        },
      ],
    },
  },
};
