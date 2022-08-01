export const UpdateATag = {
  display: "Delete a tag",
  name: "update_tags",
  function: "update_tags",
  write: true,

  where: {
    clause: {
      conditions: [
        {
          field: "name",
          operator: "eq",
          value: "DevTestTag2",
        },
      ],
    },
  },
  value: {
    name: "DevTestTag3",
  },
  return: ["affected_rows"],
};
