// eslint-disable
// this is an auto generated file. This will be overwritten

export const createOrderTransaction = `mutation CreateOrderTransaction($order: String) {
  createOrderTransaction(order: $order)
}
`;
export const createOrder = `mutation CreateOrder($input: CreateOrderInput!) {
  createOrder(input: $input) {
    id
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
export const updateOrder = `mutation UpdateOrder($input: UpdateOrderInput!) {
  updateOrder(input: $input) {
    id
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
export const deleteOrder = `mutation DeleteOrder($input: DeleteOrderInput!) {
  deleteOrder(input: $input) {
    id
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
export const createLineItem = `mutation CreateLineItem($input: CreateLineItemInput!) {
  createLineItem(input: $input) {
    id
    sku
    qty
    description
    price
    total
  }
}
`;
export const updateLineItem = `mutation UpdateLineItem($input: UpdateLineItemInput!) {
  updateLineItem(input: $input) {
    id
    sku
    qty
    description
    price
    total
  }
}
`;
export const deleteLineItem = `mutation DeleteLineItem($input: DeleteLineItemInput!) {
  deleteLineItem(input: $input) {
    id
    sku
    qty
    description
    price
    total
  }
}
`;
export const createProduct = `mutation CreateProduct($input: CreateProductInput!) {
  createProduct(input: $input) {
    id
    sku
    name
    price
    image
  }
}
`;
export const updateProduct = `mutation UpdateProduct($input: UpdateProductInput!) {
  updateProduct(input: $input) {
    id
    sku
    name
    price
    image
  }
}
`;
export const deleteProduct = `mutation DeleteProduct($input: DeleteProductInput!) {
  deleteProduct(input: $input) {
    id
    sku
    name
    price
    image
  }
}
`;
