import { AllPlaysByUser } from "./simple";

export const GetAllPlaysByUserByMonth = (gte, lte) => {
  return {
    ...AllPlaysByUser.query,
    where: {
      clause: {
        operator: "and",
        conditions: [
          {
            field: "created_at",
            operator: "lte",
            value: lte,
          },
          {
            field: "created_at",
            operator: "gte",
            value: gte,
          },
        ],
      },
    },
  };
};
