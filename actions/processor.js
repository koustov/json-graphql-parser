export const processLabels = (template, config) => {
  return template
    .replace("%MUTATION_LABEL%", config.name)
    .replace("%MUTATION_FUNCTION%", config.function);
};

export const objectToString = (object_to_process) => {
  const object_parsed = [];
  Object.keys(object_to_process).forEach((key) => {
    object_parsed.push(
      `${key}:${
        object_to_process[key] instanceof Object
          ? objectToString(object_to_process[key])
          : object_to_process[key]
      }`
    );
  });
  return object_parsed.join(",");
};

export const objectToGraphqlString = (object_to_process) => {
  const processObject = (obj) => {
    if (Array.isArray(obj)) {
      const a_processed = [];
      let first_is_object = false;
      obj.forEach((o, oi) => {
        if (typeof o === "string" || o instanceof String) {
          a_processed.push(o);
        } else if (o instanceof Object) {
          if (oi === 0) {
            first_is_object = true;
          }
          a_processed.push(processObject(o));
        }
      });
      return `${a_processed.join(" ")}`;
    }
    if (obj instanceof Object) {
      const o_processed = [];
      Object.keys(obj).forEach((o) => {
        o_processed.push(`${o} {${processObject(obj[o])}}`);
      });
      return o_processed.join(" ");
    }
  };
  const res = processObject(object_to_process);
  if (res.startsWith("{")) {
    return res;
  } else {
    return `{${res}}`;
  }
};

export const objectsToString = (objects_to_process) => {
  const objects_parsed = [];
  objects_to_process.forEach((obj) => {
    objects_parsed.push(`${objectToString(obj)}`);
  });
  const allObjectJoined = object_parsed.join(",");
  return `${allObjectJoined}`;
};

export const processObject = (template, config) => {
  return template.replace("%MUTATION_OBJECT%", objectToString(config.object));
};

export const processObjects = (template, config) => {
  return template.replace("%MUTATION_OBJECTS%", objectsToString(config.object));
};

export const prepareClause = (where_clause) => {
  const processClauseObject = (where) => {
    let res_obj = {};
    // openign brace
    let current_obj = res_obj;
    const clause = where.clause;
    if (clause) {
      if (clause.operator) {
        const operaton_string = `'_${clause.operator}'`;
        current_obj[operaton_string] = {};
        current_obj = current_obj[operaton_string];
      }

      if (clause.class) {
        current_obj[clause.class] = {};
        current_obj = current_obj[clause.class];
      }

      if (clause.conditions && clause.conditions.length) {
        clause.conditions.forEach((con) => {
          current_obj[`'${con.field}'`] = {
            [`'_${con.operator}'`]: `'${getParamValue(con)}'`,
          };
          if (con.clause) {
            con = { ...con, ...processClauseObject(con) };
          }
        });
      }
    }
    return res_obj;
  };
  return JSON.stringify(processClauseObject(where_clause))
    .replace(/"'/g, "")
    .replace(/'"/g, "");
};

export const prepareClauseObject = (name, config) => {
  const clauseTemplate = "%MUTATION_CLAUSE_NAME% {%CLAUSE_OBJECT%}";
  let res = clauseTemplate.replace("%MUTATION_CLAUSE_NAME%", name);
  if (config.operator) {
    res = res.replace(
      "%CLAUSE_OBJECT%",
      `_${config.operator}: {%CLAUSE_OBJECT%}`
    );
  }
  config.clause.forEach((c) => {
    res = res.replace(
      "%CLAUSE_OBJECT%",
      `{${c.class}:{${c.field}:{_${c.operator}: ${getParamValue(
        c
      )}}%CLAUSE_OBJECT%}}`
    );
  });
  res = res.replace("%CLAUSE_OBJECT%", "");
  return res;
};

export const getParamValue = (param) => {
  if (param && param.type) {
    if (param.value === undefined) {
      return null;
    }
    switch (param.type) {
      case "string":
        return `"${param.value}"`;
      case "datestart":
        return param.value
          ? `"${setDateTo(new Date(param.value), true).toISOString()}"`
          : undefined;
      case "dateend":
        return param.value
          ? `"${setDateTo(new Date(param.value)).toISOString()}"`
          : undefined;
      case "array":
        return Array.isArray(param.value)
          ? `[${param.value.map((p) => `"${p}"`).join(",")}]`
          : `[${param.value}]`;
      case "stringtoarray":
        if (typeof param.value === "string" && param.value.length === 0) {
          return `[${param.value
            .split(",")
            .map((p) => `"${p}"`)
            .join(",")}]`;
        } else {
          return "[]";
        }
      case "objecttoarray":
        return Array.isArray(param.value)
          ? JSON.stringify(param.value)
          : `[${param.value}]`;

      default:
        return param.value;
    }
  } else {
    return param;
  }
};
