<div align="center">
   <p>
    <h1>json-graphql-parser</h1>
    <h4>A simple way to create and parse graphql query on node application</h1>
  </p>
  <p>
     <i>Building graphql query is just an API away.</i>
     <br/>
     <i>No graphql knowledge is required.</i>
     <br/>
  </p>

  <p>

  </p>
</div>

---

![GitHub watchers](https://img.shields.io/github/watchers/koustov/json-graphql-parser.svg?logo=github&label=Watch) ![GitHub watchers](https://img.shields.io/github/issues/koustov/json-graphql-parser?logo=github&label=Issues) ![GitHub watchers](https://img.shields.io/github/stars/koustov/json-graphql-parser?logo=github&label=Stars) ![GitHub watchers](https://img.shields.io/npm/dt/json-graphql-parser.svg?logo=npm&label=downloads)

**Table of Contents**

- [Playground](#playground)
- [Install](#install)
- [Usage](#usage)
- [Query Configuration](#query-configuration)
- [Schema](#schema)
- [Examples](#examples)
- [Contribution 🍰](#contribution-)
- [License](#license)

**Note** V1 template will be deprecated soon. Use V2 instead.

## Playground

Visit https://jgpp.koustov.com/

## Install

```bash
    npm install json-graphql-parser axios
    # or
    yarn add json-graphql-parser axios
```

## Usage

1. Import
   ES6

   ```javascript
   // ES6
   import { submit } from "json-graphql-parser";

   // ES5
   const { submit } = require("json-graphql-parser");
   ```

2. Usage
   ```javascript
   submit(query_config, url, additional_header);
   ```

## Query Configuration

Basic Query

```javascript
{
    display:    "[Optional | String]: Give a display name for the query",
    name:       "[Optional | String]: Query name",
    function:   "[Optional | String]: Target function name",
    write:      "[Optional | Boolean]: Whether it is a graphql query or mutation that you want to perform",
    return:     "[Required | String Array]: Array parameters to return"
}
```

Clause

```javascript
{
    where: {
        clause {
            class:      "[Optional | String] Target class name",
            operator:   "[Optional | String] Operator type (or/and)",
            conditions: [{
                field:      "[Optional | String]: Field in question",
                operator:   "[Optional | String] Operator (eq | ne | in | ...)",
                value:      "[Optional | String] Value to match",
                class:      "[Optional | String] Target class name",
                clause:     "[Optional | Object] More recursive conditions"
            }],
        }
    },
}
```

> Note: In `conditions`, you could **either** use `field`, `operator` and `value` properties **or** you can nest one level down using `clause`

## Schema

Check the [object schema here](./templates/base-template_schema.js)

## Examples

A bunch of examples has been given under [queries](./example/queries_v2/) from an outstanding open source application called [reactplay](https://www.reactplay.io)

## Contribution 🍰

Feel free to create issue and make pull request

Refer [code of conduct ](./CODE_OF_CONDUCT.md)

Refer [contributing ](./CONTRIBUTING.md)

## License

MIT © [Koustov](https://github.com/koustov)
