# Nampis
A collection of apis using npm.

# Installation
Current stable release (**v1.1.6**) requires at least Node.js **12.0.0**

```
npm install nampis
```

# Apis

Command | Api
-----|-----
Cat  | [Cataas](https://cataas.com)
Dog  | [Dog.ceo](https://dog.ceo/api/breeds/image/random)
Fox  | [Randomfox.ca](https://randomfox.ca/floof)
Duck | [Random-d.uk](https://random-d.uk/api/quack)

# Usage

```js
const nampis = require("nampis");

async function api() {
    return await nampis.cat();
};

api();
```
