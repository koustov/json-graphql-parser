<div align="center">
   <p>
    <h1>json-graphql-parser</h1>
    <h4>A simple way to create and parse GraphQL query on node application</h1>
  </p>
  <p>
     <i>Building GraphQL query is just an API away.</i>
     <br/>
     <i>No GraphQL knowledge is required.</i>
     <br/>
  </p>

  <p>

  </p>
</div>

---

![GitHub watchers](https://img.shields.io/github/watchers/koustov/json-graphql-parser.svg?logo=github&label=Watch) ![GitHub watchers](https://img.shields.io/github/issues/koustov/json-graphql-parser?logo=github&label=Issues) ![GitHub watchers](https://img.shields.io/github/stars/koustov/json-graphql-parser?logo=github&label=Stars) ![GitHub watchers](https://img.shields.io/npm/dt/json-graphql-parser.svg?logo=npm&label=downloads)

**Table of Contents**

- [What is?](#what-is)
- [Playground](#playground)
- [Install](#install)
- [Usage](#usage)
- [Query Configuration](#query-configuration)
  - [Parameters](#parameters)
  - [Query Constrinction](#query-constrinction)
- [More Examples](#more-examples)
- [Schema](#schema)
- [What next](#what-next)
- [Contribution 🍰](#contribution-)
- [License](#license)

> **Note**:  V1 template will be deprecated soon. Use V2 instead
# What is?

`json-graphql-parser` is a modular and simpler way to write graph ql query from any node/javascript application. User doesn't have to know the complex structure of a graphql schema, rather its being driven by objects. 

**Quick example**:

*graphql syntax*
```gql
query MyQuery {
  users(limit: 5, offset: 5, where: {_and: {id: {_eq: "123"}}}, order_by: {created_at: asc}) {
    id
    name
    user_like {
      id
      liked
    }
    description
  }
}

```

*json-graphql-parser syntax*
```javascript
    display: 'fetch users',
    name: 'Fetch_Users',
    function: 'users',
    return: [
        "id",
        "name", 
        { 
            "play_like": [
                "liked", 
                "id"
            ] 
        }, 
    "description"
    ],
    orderBy: {
        "created_at": "desc"
    }
```

> **Note**:  `json-graphql-parser` was introduced keeping in mind to solve graphql parsing and understanding issue. It never been thought to replace too complex queries which are tough to maitain. If you have very complex queries, break it in multiple simple one. Handling very complex queries are in pipeline (check [What next](#what-next) ) however not scoped or estimated yet
 

# Playground

Visit https://jgpp.koustov.com/

# Install

```bash
    npm install json-graphql-parser axios url
    # or
    yarn add json-graphql-parser axios url
```

# Usage

1. Import
   ES6

   ```javascript
   // ES6
    import { submit, submit_multi } from 'json-graphql-parser/v2/index.js';
   // ES5
   const { submit, submit_multi } = require("json-graphql-parser/v2/index.js");
   ```

2. Usage
   ```javascript
   submit(query_config, url, additional_header);
   ```

# Query Configuration

## Parameters
Below are the major parameters in a json-graphql-parser object
1. **display**: *Optional | String* : Give a display name for the query
2. **name**: *Optional | String* : Query name
3. **function**: *Optional | String* : Target graphql function name . Typical format of function name is <operation_type:mandatory>_<table:mandatory>_<suffix:optional>. 

    Example:
   1. **table_name**: For fetch
   2. Update_**table_name**: For update
   3. Insert_**table_name**_One: For inserting one entry
   4. Insert_**table_name**_multi: For inserting multiple entries
4. **return**: *Required | String Array*: Array parameters to return
5. **write**: *Optional | Boolean* : Denotes if the given request is for a write or read operation. In other word `mutation` 
6. **object**: *Optional | Object*: Value of a row when inserting and object
7. **value**: *Optional | Object*: Keyvalue paired object when its intended to update specific property of a row
8. **where**: *Optional | Object*: Contains an object structure to denote the where clause.

    Format 
    ```javascript
    {
        where: {
            clause {
                class:      "[Optional | String] Target class name",
                operator:   "[Optional | String] Operator type (or/and)",
                conditions: [{
                    field:      "[Optional | String]: Field in question",
                    operator:   "[Optional | String] Operator (eq | ne | in | ilike | <any graphql operator>)",
                    value:      "[Optional | String] Value to match",
                    type:       "[Optional | String] Type of the value Required only when one wants to pass string value explicitly,
                    class:      "[Optional | String] Target class name",
                    clause:     "[Optional | Object] More recursive conditions"
                }],
            }
        },
    }
9. **orderBy**: *Optional | Object* : Inform the server what would be ordering mechanism on returned data
        Format: {<attribute_name>: <order direction: asc|desc>}

10. **offset**: *Optional | Number*: Offset record number. In other word skip the recird by.
11. **limit**: *Optional | Number*: Limit the return count. `offset` and `limit` together can form pagination mechanism

## Query Constrinction
1. Basic Select Query
    - *Definition*: Get all user ids from users table
    - *Structuring*: 
        - display: "Fetch user ids"
        - function: "Fetch_users"
        - return: ["id"]
    - *Final object*:
        ```javascript
        display: 'Fetch user ids',
        name: 'Fetch_users',
        function: 'users',
        return: [
            "id"
        ]
        ```
2.  Basic Select Query with order by 
    - *Definition*: Get all user ids from users table ordered by date of creation
    - *Structuring*: 
        - display: "Fetch user ids"
        - function: "Fetch_users"
        - return: ["id"]
        - orderBy: {created_at: "desc"}
    - *Final object*:
        ```javascript
        display: 'Fetch user ids',
        name: 'Fetch_users',
        function: 'users',
        return: [
            "id"
        ],
        orderBy: {
            "created_at": "desc"
        }
        ```

3. Basic Select Query with order by and clause 
    - *Definition*: Get all user ids from users table where the user belongs to india and ordered by date of creation
    - *Structuring*: 
        - display: "Fetch user ids"
        - function: "Fetch_users"
        - return: ["id"]
        - orderBy: {created_at: "desc"}
        - where:          
            ```javascript
            {
                clause:{
                operator: 'and',
                    conditions: [
                        {
                            field: 'country',
                            operator: 'eq',
                            value: "india",
                            type: 'string'
                        }
                    ]
                }
            }
            ```
    - *Final object*:
        ```javascript
        display: 'Fetch user ids',
        name: 'Fetch_users',
        function: 'users',
        return: [
            "id"
        ],
        orderBy: {
            "created_at": "desc"
        },
        where: {
            clause:{
            operator: 'and',
                conditions: [
                    {
                        field: 'country',
                        operator: 'eq',
                        value: "india",
                        type: 'string'
                    }
                ]
            }
        }
        ```

4. Basic Select Query with order by and multiple clauses 
    - *Definition*: Get all user ids from users table where the user belongs to india and department is finance and ordered by date of creation
    - *Structuring*: 
        - display: "Fetch user ids"
        - function: "Fetch_users"
        - return: ["id"]
        - orderBy: {created_at: "desc"}
        - where: 
            ```javascript
           {
                clause:{
                operator: 'and',
                    conditions: [
                        {
                            field: 'country',
                            operator: 'eq',
                            value: "india",
                            type: 'string'
                        },
                        {
                            field: 'department',
                            operator: 'eq',
                            value: "finance",
                            type: 'string'
                        }
                    ]
                }
            }
            ```
    - *Final object*:
        ```javascript
            display: 'Fetch user ids',
            name: 'Fetch_users',
            function: 'users',
            return: [
                "id"
            ],
            orderBy: {
                "created_at": "desc"
            },
            where: {
                clause:{
                operator: 'and',
                    conditions: [
                        {
                            field: 'country',
                            operator: 'eq',
                            value: "india",
                            type: 'string'
                        },
                        {
                            field: 'department',
                            operator: 'eq',
                            value: "finance",
                            type: 'string'
                        }
                    ]
                }
            }
        ```


> Note: In `conditions`, you could **either** use `field`, `operator` and `value` properties **or** you can nest one level down using `clause`

5. Insert Query
    - *Definition*: Add a user John Doe to collection
    - *Structuring*: 
        - display: "Insert user"
        - write: true
        - function: "insert_users_one"
        - return: ["affected_rows"]
    - *Final object*:
        ```javascript
        display: 'Insert user',
        name: 'Insert user',
        write: true,
        function: 'insert_users_one',
        object: {
            name: 'Jhn Doe',
            department: 'finance',
            country: 'us'
        }
        return: [
            "affected_rows"
        ]
        ```

5. Update Query
    - *Definition*: Update a user John Doe and set country to india
    - *Structuring*: 
        - display: "Update user"
        - function: "update_users"
        - write: true
        - where: {'name': 'John Doe}
        - value: {'country': 'india'}
        - return: ["affected_rows"]
    - *Final object*:
        ```javascript
        display: 'Insert user',
        name: 'Insert user',
        function: 'insert_users_one',
        write: true,
        value: {
            country: 'india'
        }
        where: {
            clause:{
            operator: 'and',
                conditions: [
                    {
                        field: 'name',
                        operator: 'eq',
                        value: "John Doe",
                        type: 'string'
                    }
                ]
            }
        }
        return: [
            "affected_rows"
        ]
        ```

# More Examples

A bunch of examples have been given under [queries](./example/queries_v2/) from an outstanding open-source application called [Reactplay](https://www.reactplay.io)

# Schema

Check the [object schema here](./templates/base-template_schema.js)


# What next
1. Till date this package is intended to solve the simplistic graphql problems. Now its time to go more complex and generic
    Issue: (https://github.com/koustov/json-graphql-parser/issues/14)[https://github.com/koustov/json-graphql-parser/issues/14]
2. grapql to json-graphql-parser object converter
    Issue; (https://github.com/koustov/json-graphql-parser/issues/15)[https://github.com/koustov/json-graphql-parser/issues/15]

# Contribution 🍰

Feel free to create [issue](../../issues) and make [pull request](../../pulls)

Refer [Code of Conduct](./CODE_OF_CONDUCT.md)

Refer [Contributing](./CONTRIBUTING.md)

# License

MIT © [Koustov](https://github.com/koustov)
