// eslint-disable
// this is an auto generated file. This will be overwritten

export const getOrder = `query GetOrder($id: ID!, $createdAt: String!) {
  getOrder(id: $id, createdAt: $createdAt) {
    id
    total
    subtotal
    tax
    createdAt
    updatedAt
    lineItems {
      nextToken
    }
  }
}
`;
export const listOrders = `query ListOrders(
  $id: ID
  $createdAt: ModelStringKeyConditionInput
  $filter: ModelOrderFilterInput
  $limit: Int
  $nextToken: String
) {
  listOrders(
    id: $id
    createdAt: $createdAt
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      total
      subtotal
      tax
      createdAt
      updatedAt
    }
    nextToken
  }
}
`;
export const getLineItem = `query GetLineItem($id: ID!) {
  getLineItem(id: $id) {
    id
    sku
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
      sku
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
