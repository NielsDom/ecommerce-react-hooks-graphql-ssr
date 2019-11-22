# React Ecommerce GraphQL:

Next.js, SSR, GraphQL, Apollo, Hooks, Material-UI<br/>

Phase 1: Hardcoded DB + Apollo state management<br/>
Phase 2: Node & MongoDB & JWT Auth<br/>
Phase 3: Deployment + PWA

### http://localhost:4000/

##### Get all:

```
{
  products {
    id
    title
    picture
    description
  }
}
```

##### Get one:

```

{
  products(id: "1") {
    id
    title
    picture
    description
  }
}
```

Or

```
query getProducts($id: ID!) {
  product(id: $id){
    id
    title
    picture
    description
  }
}
```

Variable ->

```
{
  "id": "2"
}
```

##### Add:

```
mutation {
  addProduct(description: "jambon@fefe.com", title: "title", picture: "picture link") {
    description,
    title,
    picture
  }
}
```

##### crossed queries:

```
{
  products {
    id
    title
    picture
    description
    comments {
      id
      message
      rating
    }
  }
}
```

get categories:

```
{
	productscategories {
    id
    title
    subcategories {
      id
      title
    }
  }
}
```

generate products

const arr = []
const arrSize = ['pink', 'red', 'yellow', 'orange', 'purple', 'black', 'white', 'green', 'cyan', 'gray']

for (i = 1; i < 400; i++) {
const arrSizeAv = []
const category = Math.floor(1 + Math.random() _ 3)
const subcategory = Math.floor(1 + Math.random() _ 4)
const price = Math.floor(1 + Math.random() _ 10000)
const size = Math.floor(1 + Math.random() _ arrSize.length)

for (ix = 0; ix < size; ix++) {
const pickupSize = Math.floor(1 + Math.random() \* arrSize.length - 1)
arrSizeAv.push(arrSize[pickupSize])
}

arr.push({
"id": ""+i,
"description": "description for product"+ i,
"title": "product"+i,
"picture": "https://source.unsplash.com/random",
"category": category+'',
"subcategory": category+ '-'+subcategory,
"price": price,
"size": [...new Set(arrSizeAv)]
})
}
