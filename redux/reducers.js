import { combineReducers } from 'redux';
import _ from 'lodash';

const orderInitialState = {
    totalQty: 0,
    subtotal: 0,
    tax: 0,
    total: 0,
    lineItems: [],
};

export const lineItemsReducer = (state = [], action) => {
    switch(action.type) {
        case "ADD_LINE_ITEM": 
            const product = action.product;
            const lineItem = _.find(state.lineItems, (lineItem) => lineItem.sku === product.sku);
            const otherLines = _.filter(state.lineItems, (lineItem) => lineItem.sku !== product.sku);
            if (!lineItem) {
                return [
                    ...otherLines,
                    {
                        qty: 1,
                        price: product.price,
                        description: product.name,
                        total: product.price,
                        sku: product.sku,
                        productId: product.id
                    }
                ];
            }

            const newQty = lineItem.qty + 1;
            return [
                ...otherLines,
                {
                    ...lineItem,
                    qty: newQty,
                    total: newQty * product.price,
                }
            ];
        default: 
            return state;
    }
};

export const orderReducer = (state = orderInitialState, action) => {
    switch(action.type) {
        case "ADD_LINE_ITEM": 
            const product = action.product;
            const totalQty = state.totalQty + 1;
            const subtotal = state.subtotal + product.price;
            const tax = subtotal * 0.08;
            const total = subtotal + tax;
            return {
                ...state,
                tax,
                total,
                subtotal,
                totalQty,
                lineItems: lineItemsReducer(state, action)
            };
        default: 
            return state;
    }
};

export default combineReducers({
    order: orderReducer,
});