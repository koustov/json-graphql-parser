import axios from "axios";
import { prepareQuery } from "./templates/base-template.js";

export const config_to_query = (config) => {
  return prepareQuery(config);
};
