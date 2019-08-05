import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import gql from 'graphql-tag';
import { graphqlMutation } from 'aws-appsync-react';
import {
    Text,
    Container,
    Content,
    Button,
    List,
    ListItem,
    Left,
    Right,
    Body,
    ActionSheet,
    Toast
} from 'native-base';
import { startNewOrder } from '../../redux/actions';
import { createOrderWithLineItems } from '../../graphql/mutations';
import { listOrders } from '../../graphql/queries';
import styles from './styles';

const Checkout = (props) => {
    
    const order = useSelector(state => state.order);
    const dispatch = useDispatch();

    function submitOrder() {
        const now = new Date().toISOString();
        return props.createOrderWithLineItems({
            input: {
                id: now,
                createdAt: now,
                updatedAt: now,
                subtotal: order.subtotal,
                tax: order.tax,
                total: order.total,
                lineItems: order.lineItems,
            }
        });
    }

    function checkoutBtnHandler() {
        return ActionSheet.show({
            options: ["Pay with cash", "Pay with credit card", "Cancel"],
            cancelButtonIndex: 2,
        }, buttonIndex => {
            if (buttonIndex < 2) {
                Toast.show({
                    text: "Order has been processed",
                    buttonText: "Okay",
                    duration: 2000
                });
                
                submitOrder();
                dispatch(startNewOrder());
                props.navigation.goBack();
            }
        });
    }

    const lineItemList = order.lineItems.map(lineItem => (
        <ListItem icon key={lineItem.sku}>
            <Left>
                <Text>{lineItem.qty}</Text>
            </Left>
            <Body>
                <Text>{lineItem.description}</Text>
            </Body>
            <Right>
                <Text>${lineItem.total.toFixed(2)}</Text>
            </Right>
        </ListItem>
    ));

    return (
        <Container>
            <Content>
                <Text style={styles.totalTxt}>TOTAL</Text>
                <Text style={styles.totalQty}>${order.total.toFixed(2)}</Text>
                <List>
                    <ListItem itemDivider>
                        <Text>&nbsp;</Text>
                    </ListItem>
                    {lineItemList}
                    <ListItem itemDivider>
                        <Text>&nbsp;</Text>
                    </ListItem>
                    <ListItem>
                        <Body>
                            <Text style={styles.subtotalsTxt}>Subtotal</Text>
                        </Body>
                        <Right>
                            <Text>${order.subtotal.toFixed(2)}</Text>
                        </Right>
                    </ListItem>
                    <ListItem>
                        <Body>
                            <Text style={styles.subtotalsTxt}>Tax</Text>
                        </Body>
                        <Right>
                            <Text>${order.tax.toFixed(2)}</Text>
                        </Right>
                    </ListItem>
                    <ListItem>
                        <Body>
                            <Text style={styles.subtotalsTxt}>Total</Text>
                        </Body>
                        <Right>
                            <Text>${order.total.toFixed(2)}</Text>
                        </Right>
                    </ListItem>
                </List>
                <Button block info style={styles.checkoutBtn} onPress={checkoutBtnHandler} disabled={order.lineItems.length === 0}>
                    <Text style={styles.checkoutTxt}>Checkout</Text>
                </Button>
            </Content>
        </Container>
    );
};

Checkout.navigationOptions = {
    title: 'Checkout',
};

const createOrderMutation = gql(createOrderWithLineItems);
const listOrdersQuery = gql(listOrders);
export default graphqlMutation(
    createOrderMutation,
    listOrdersQuery,
    'Order'
)(Checkout);