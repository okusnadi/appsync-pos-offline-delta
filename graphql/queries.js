// eslint-disable

export const listOrders = `{
  listOrders(limit: 100) {
    items {
      id
      total
      subtotal
      tax
      createdAt
      updatedAt
    }
  }
}`;

export const getOrder = `query GetOrder($id: ID!) {
  getOrder(id: $id) {
    id
    total
    subtotal
    tax
    createdAt
    updatedAt
    lineItems {
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
