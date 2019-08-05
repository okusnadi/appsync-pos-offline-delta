// eslint-disable

export const createOrderWithLineItems = `mutation CreateOrderWithLineItems($input: CreateOrderInput!) {
  createOrderWithLineItems(input: $input) {
    id
    total
    subtotal
    tax
    createdAt
    updatedAt
  }
}
`;
