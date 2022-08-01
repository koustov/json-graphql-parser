export const AddATag = {
  display: "Add a tag",
  name: "Add_tag",
  function: "insert_tags_one",
  write: true,
  object: {
    name: "DevTestTag2",
  },
  return: ["id"],
};

export const AddALike = {
  display: "Delete a tag",
  name: "insert_play_like_one",
  function: "insert_play_like_one",
  write: true,
  object: {
    play_id: "053a5672-e3a3-4467-80fc-e9453717ba00",
    user_id: "84cd9080-6eb9-4eb1-839c-2db226acf3d3",
    liked: false,
  },
  return: ["id"],
};
