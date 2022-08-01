export const DeleteATag = {
  display: "Delete a tag",
  name: "delete_tags",
  function: "delete_tags",
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

  return: ["affected_rows"],
};
