<div align="center">
   <p>
    <h1>json-graphql-server</h1>
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

![GitHub watchers](https://img.shields.io/github/watchers/koustov/json-graphql-server.svg?logo=github&label=Watch) ![GitHub watchers](https://img.shields.io/github/issues/koustov/json-graphql-server?logo=github&label=Issues) ![GitHub watchers](https://img.shields.io/github/stars/koustov/json-graphql-server?logo=github&label=Stars) ![GitHub watchers](https://img.shields.io/npm/dt/rfp-react-form-builder.svg?logo=npm&label=downloads)

This is a **fully customizable** form builder based on [`React`](https://facebook.github.io/react/)

**Table of Contents**

- [Install](#install)
- [Usage](#usage)
- [Query Configuration](#query-configuration)
- [Examples](#examples)
- [Contribution 🍰](#contribution-)
- [License](#license)


## Install 

```bash
    npm install json-graphql-server axios
```

or

```bash
    yarn add json-graphql-server axios
```
## Usage

1. Import
    ES6
    ```javascript
    import {submit} from 'json-graphql-server'
    ```
    ES5
    ```javascript
    const {submit} = require('json-graphql-server')
    ```
1. Usage
   ```javascript
   submit(query_config, url, additional_header)
   ```

## Query Configuration
    
Basic Query

```javascript
{
    display:    "[Optional | String]: Give a display name for the query",
    name:       "[Optional | String]: Query name",
    function:   "[Required | String]: Target function name",
    write:      "[Optional | Boolean]: Whether the current one is a write query,
    params:     "[Required | String Array]: Array parameters to return
}
```

Clause

```javascript
{
    where: {
        class:      "[Optional | String] Target class name",
        node:       "[Required | String] Target attribute",
        operator:   "[Optional | String] Operator type (or/and)",
        clause: [{
            field:      "[Required | String]: Field in question",
            operator:   "[Required | String] Operator (eq | ne | in | ...)",
            value:      "[Required | String] Value to match",
            type:       "[Optional | String] Value type",
        }],
    },
}
```

## Examples 
A bunch of examples has been given under [queries](./example/queries/) from an outstanding open source  application called [reactplay](https://www.reactplay.io)

## Contribution 🍰

Feel free to create issue and make pull request

Refer [code of conduct ](./CODE_OF_CONDUCT.md)

Refer [contributing ](./CONTRIBUTING.md)

## License

MIT © [Koustov](https://github.com/koustov)