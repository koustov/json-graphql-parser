<div align="center">
   <p>
    <h1>json-graphql-parser (example)</h1>
  </p>
</div>

---

**Table of Contents**

- [Playground](#playground)
- [Setup](#setup)
- [Install packages](#install-packages)
  - [Setup custom query objects](#setup-custom-query-objects)
- [Run it locally](#run-it-locally)
- [Output](#output)

**Note** V1 template will be deprecated soon. Use V2 instead.

## Playground

Visit <https://jgpp.koustov.com/> for details

## Setup

Create a `.env` file to store following values

1. `API_SERVER` : Refers to the server for graphql execution
2. `QUERY_TO_TEST` : A coma separated query ids that you would like to execute

## Install packages

```bash
    npm install
    # or
    yarn
```

### Setup custom query objects

A bunch of examples has been given under [queries](./example/queries_v2/) from an outstanding open source application called [reactplay](https://www.reactplay.io)

If you need to introduce your own query,

1. Create a `js` file for your query and export the query object
   1. [OPTIONAL] setup your call back method for processing result
2. Add the query object name to `QUERY_TO_TEST` mentioned under [Setup](#setup)

Example:
`QUERY_TO_TEST=FetchAllFeaturedPlays,FetchPlaysBySearchString`
## Run it locally

```bash
yarn start
# OR
npm run start
```

## Output

All out put wil be displayed on console
