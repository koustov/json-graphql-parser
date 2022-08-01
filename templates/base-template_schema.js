export const schema = {
  $schema: "http://json-schema.org/draft-04/schema#",
  type: "object",
  properties: {
    display: {
      type: "string",
    },
    name: {
      type: "string",
    },
    function: {
      type: "string",
    },
    distinct: {
      type: "string",
    },
    return: {
      type: "array",
      minContains: 1,
    },
    write: {
      type: "boolean",
    },
    where: {
      type: "object",
      additionalProperties: false,
      properties: {
        clause: {
          type: "object",
          additionalProperties: false,
          properties: {
            operator: {
              type: "string",
            },
            class: {
              type: "string",
            },
            conditions: {
              type: "array",
              minContains: 1,
              items: [
                {
                  type: "object",
                  additionalProperties: false,
                  properties: {
                    field: {
                      type: "string",
                    },
                    operator: {
                      type: "string",
                    },
                    value: {
                      type: ["number", "string", "boolean"],
                    },
                  },
                  required: ["field", "operator", "value"],
                },
              ],
            },
          },
          required: ["conditions"],
        },
      },
      required: ["clause"],
    },
    offset: {
      type: "integer",
    },
    limit: {
      type: "integer",
    },
    orderBy: {
      type: "object",
      additionalProperties: false,
      properties: {
        created_at: {
          type: "string",
        },
      },
      required: ["created_at"],
    },
    object: {
      type: "object",
      additionalProperties: false,
      properties: {
        play_id: {
          type: "string",
        },
        user_id: {
          type: "string",
        },
        liked: {
          type: "boolean",
        },
      },
      required: ["play_id", "user_id", "liked"],
    },
    value: {
      type: "object",
      additionalProperties: false,
      properties: {
        name: {
          type: "string",
        },
      },
      required: ["name"],
    },
  },
  required: ["name", "function"],
  additionalProperties: false,
};
