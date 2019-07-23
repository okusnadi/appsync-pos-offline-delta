// eslint-disable
// this is an auto generated file. This will be overwritten

export const getOrder = `query GetOrder($id: ID!) {
  getOrder(id: $id) {
    id
    lineItems {
      items {
        id
        productId
        qty
        description
        price
        total
      }
      nextToken
    }
  }
}
`;
export const listOrders = `query ListOrders(
  $filter: ModelOrderFilterInput
  $limit: Int
  $nextToken: String
) {
  listOrders(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      lineItems {
        nextToken
      }
    }
    nextToken
  }
}
`;
export const getLineItem = `query GetLineItem($id: ID!) {
  getLineItem(id: $id) {
    id
    order {
      id
      lineItems {
        nextToken
      }
    }
    productId
    qty
    description
    price
    total
  }
}
`;
export const listLineItems = `query ListLineItems(
  $filter: ModelLineItemFilterInput
  $limit: Int
  $nextToken: String
) {
  listLineItems(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      order {
        id
      }
      productId
      qty
      description
      price
      total
    }
    nextToken
  }
}
`;
export const getProduct = `query GetProduct($id: ID!) {
  getProduct(id: $id) {
    id
    sku
    name
    price
    image
  }
}
`;
export const listProducts = `query ListProducts(
  $filter: ModelProductFilterInput
  $limit: Int
  $nextToken: String
) {
  listProducts(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      sku
      name
      price
      image
    }
    nextToken
  }
}
`;
