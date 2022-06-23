import { submit, config_to_query } from "../index.js";
import dotenv from "dotenv";
dotenv.config({ path: ".env" });

const url = process.env.API_SERVER;
const config = {
  // query Fetch_Plays {
  //   plays(where: {play_tags:{tag: {id: {_eq: "1b4439df-ff51-4ead-87ec-ed8799657ce7"}}}}){
  //     blog
  //     component
  //     cover
  //     created_at
  //     description
  //     featured
  //     github
  //     owner_user_id
  //     id
  //     language
  //     level {
  //       id
  //       name
  //     }
  //     name
  //     path
  //     play_tags {
  //       tag {
  //         id
  //         name
  //       }
  //     }
  //     updated_at
  //     user{
  //       id
  //       displayName
  //       avatarUrl

  //     }
  //     video
  //   }
  // }
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
    class: "tag",
    node: "play_tags",
    clause: [
      {
        field: "id",
        operator: "eq",
        value: "3a31d031-f367-4514-ad80-f4e241577118",
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
