// eslint-disable
// this is an auto generated file. This will be overwritten

export const onCreateOrder = `subscription OnCreateOrder {
  onCreateOrder {
    id
    total
    subtotal
    tax
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
export const onUpdateOrder = `subscription OnUpdateOrder {
  onUpdateOrder {
    id
    total
    subtotal
    tax
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
export const onDeleteOrder = `subscription OnDeleteOrder {
  onDeleteOrder {
    id
    total
    subtotal
    tax
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
export const onCreateLineItem = `subscription OnCreateLineItem {
  onCreateLineItem {
    id
    sku
    qty
    description
    price
    total
  }
}
`;
export const onUpdateLineItem = `subscription OnUpdateLineItem {
  onUpdateLineItem {
    id
    sku
    qty
    description
    price
    total
  }
}
`;
export const onDeleteLineItem = `subscription OnDeleteLineItem {
  onDeleteLineItem {
    id
    sku
    qty
    description
    price
    total
  }
}
`;
export const onCreateProduct = `subscription OnCreateProduct {
  onCreateProduct {
    id
    sku
    name
    price
    image
  }
}
`;
export const onUpdateProduct = `subscription OnUpdateProduct {
  onUpdateProduct {
    id
    sku
    name
    price
    image
  }
}
`;
export const onDeleteProduct = `subscription OnDeleteProduct {
  onDeleteProduct {
    id
    sku
    name
    price
    image
  }
}
`;
