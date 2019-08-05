// eslint-disable

export const onCreateOrder = `subscription OnCreateOrder {
  onCreateOrder {
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