export const FetchPlaysDateFiltered = (value) => {
  return {
    display: "Play info",
    name: "Fetch_getQueryObjectplay",
    function: "plays",
    write: false,
    return: ["id", "name", "github", "description", "created_at", "path"],
    where: {
      clause: {
        conditions: [
          {
            field: "created_at",
            operator: "gt",
            value: value,
          },
        ],
      },
    },
  };
};
