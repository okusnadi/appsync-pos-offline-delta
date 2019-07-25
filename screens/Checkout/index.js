import React from 'react';
import { useSelector } from 'react-redux';
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
import styles from './styles';

const Checkout = () => {
    
    const order = useSelector(state => state.order);

    function checkoutBtnHandler() {
        return ActionSheet.show({
            options: ["Pay with cash", "Pay with credit card", "Cancel"],
            cancelButtonIndex: 2,
        }, buttonIndex => {
            if (buttonIndex < 2) {
                Toast.show({
                    text: "Order has been processed",
                    buttonText: "Okay",
                    duration: 4000
                });
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
                <Button block info style={styles.checkoutBtn} onPress={checkoutBtnHandler}>
                    <Text style={styles.checkoutTxt}>Checkout</Text>
                </Button>
            </Content>
        </Container>
    );
};

Checkout.navigationOptions = {
    title: 'Checkout'
};

export default Checkout;