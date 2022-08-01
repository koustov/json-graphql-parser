import axios from "axios";
import { prepareQuery } from "../templates/base-template.js";
import { Validator } from "jsonschema";
import { schema } from "../templates/base-template_schema.js";

const BACKEND_URL = `${process.env.REACT_APP_NHOST_BACKEND_URL}/${process.env.REACT_APP_NHOST_VERSION}/${process.env.REACT_APP_NHOST_ENDPOINT}`;
const header = {
  headers: {
    "Content-Type": "application/json",
  },
};

export const config_to_query = (config) => {
  return prepareQuery(config);
};

/**
 * Run GraphQL queries using Axios using a simple JSON object
 * @param {object} request           Mandatory.
 * @param {string}           url Optional.
 * @param {object}           reqheder Optional.
 * @returns {Promise} single promise
 */
export const submit = (request, url, reqheder, print_query = false) => {
  let updatedHeader = header.headers;
  if (reqheder) {
    updatedHeader = { ...updatedHeader, ...reqheder };
    header.headers = updatedHeader;
  }

  return postData(url, request, updatedHeader, print_query)
    .then((res) => {
      let data;
      try {
        if (res.isAxiosError) {
          data = { name: "Error" };
          data.status = res.response.status;
          data.message = res.message;
        } else if (!res?.data) {
          data = { name: "Error" };
          data.status = 500;
          data.message = res.message;
        } else if (res.data.errors && res.data.errors.length) {
          data = { name: "Error" };
          data.status = 500;
          data.message = res.data.errors[0].message;
          if (request.callback) {
            data = request.callback(data);
          }
        } else {
          data =
            res.data[request.function] === undefined
              ? {}
              : res.data[request.function];
        }
        return data;
      } catch (err) {}
    })
    .catch((error) => {
      return Promise.reject(error);
    })
    .finally(() => {});
};

/**
 * Run GraphQL queries using Axios using multiple  JSON object
 * @param {object[]} requests           Mandatory.
 * @param {string}           url Optional.
 * @param {object}           reqheder Optional.
 */
export const submit_multi = (requests, url, reqheder) => {
  console.warn("V1 will be deprecatred soon. V2 instead.");
  const promises = [];
  let updatedHeader = header.headers;
  if (reqheder) {
    updatedHeader = { ...updatedHeader, ...reqheder };
    header.headers = updatedHeader;
  }
  requests.forEach((config) => {
    promises.push(submit(config, url, reqheder));
  });
  return Promise.all(promises);
};

/**
 * Validate if the input object satisfies the schema
 * @param {object} conf_object           Mandatory.
 * @returns {Boolean} Returns "true", if the object is valid, else it returns "false"
 */
export const validate_object = (conf_object) => {
  var v = new Validator();
  const validationResult = v.validate(conf_object, schema);
  return {
    result: validationResult.errors.length === 0,
    error: validationResult.errors,
  };
};

function postData(url, config, reqheaders, print_query) {
  const processedBody = config_to_query(config);
  if (print_query) {
    console.log(`Request: ${processedBody}`);
  }
  let pbody = {
    query: processedBody,
    variables:
      config.variables && config.variables instanceof Object
        ? config.variables
        : {},
  };
  let options = {
    headers: Object.assign(reqheaders || {}, header.headers),
  };
  return axios
    .post(url || BACKEND_URL, JSON.stringify(pbody), options)
    .then((res) => {
      if (res.data.errors) {
        console.error("Error encountered while receiving data");
        console.error(JSON.stringify(res.data.errors, null, 2));
        throw res.data.errors;
      }
      return res.data;
    })
    .catch((error) => {
      throw error;
    });
}
