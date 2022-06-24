import { submit, config_to_query } from "../index.js";
import dotenv from "dotenv";
dotenv.config({ path: ".env" });

const url = process.env.API_SERVER;
const config = {
  display: "Filter plays by level, user, language, and multiple tags",
  name: "Fetch_Plays",
  function: "plays",
  write: false,
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
    {
      play_tags: { tag: ["name"] },
    },
    "updated_at",
    { user: ["id", "displayName", "avatarUrl"] },
    "video",
  ],
  where: {
    operator: "and",
    clause: [
      {
        field: "level_id",
        operator: "eq",
        value: "4127ed16-bf37-4c34-bed0-282cd646cd53",
        type: "string",
      },
      {
        field: "owner_user_id",
        operator: "eq",
        value: "0680f581-6584-4bc4-bbe9-aa7c97567e72",
        type: "string",
      },
      {
        field: "language",
        operator: "eq",
        value: "js",
        type: "string",
      },
      {
        node: "play_tags",
        class: "tag",
        field: "id",
        operator: "eq",
        value: "1b4439df-ff51-4ead-87ec-ed8799657ce7",
        type: "string",
      },
    ],
  },
};

console.log("The query is -------------------");
console.log(config_to_query(config));
console.log("-------------------------------");
submit(config, url).then((res) => {
  console.log(JSON.stringify(res, null, 2));
});
