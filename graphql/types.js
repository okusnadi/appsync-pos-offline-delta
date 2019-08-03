export const CreateOrderInput = `input CreateOrderInput {
    id: ID
    total: Float
    subtotal: Float
    tax: Float
    createdAt: String
    updatedAt: String
	lineItems: [LineItemInput]
}`;