# React Ecommerce GraphQl

Next.js, SSR, GraphQl, Apollo, Hooks, Material-UI and Mui-Treasury(https://mui-treasury.com/)<br/>

Phase 1: Hardcoded DB + Apollo state management<br/>
Phase 2: Node & MongoDB<br/>
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
