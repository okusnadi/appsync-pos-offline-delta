import React from 'react';
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

const lineItems = [
    {
        qty: 3,
        sku: '3466920836',
        description: 'Cinammon-Sugar Donut',
        price: 2.49,
        total: 7.47,
    },
    {
        qty: 1,
        sku: '3475341851',
        description: 'Cupcake',
        price: 2.65,
        total: 2.65,
    }
];

const Checkout = () => {
    
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

    const lineItemList = lineItems.map(lineItem => (
        <ListItem icon key={lineItem.sku}>
            <Left>
                <Text>{lineItem.qty}</Text>
            </Left>
            <Body>
                <Text>{lineItem.description}</Text>
            </Body>
            <Right>
                <Text>${lineItem.total}</Text>
            </Right>
        </ListItem>
    ));

    return (
        <Container>
            <Content>
                <Text style={styles.totalTxt}>TOTAL</Text>
                <Text style={styles.totalQty}>$21.49</Text>
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
                            <Text>$18.00</Text>
                        </Right>
                    </ListItem>
                    <ListItem>
                        <Body>
                            <Text style={styles.subtotalsTxt}>Tax</Text>
                        </Body>
                        <Right>
                            <Text>$3.49</Text>
                        </Right>
                    </ListItem>
                    <ListItem>
                        <Body>
                            <Text style={styles.subtotalsTxt}>Total</Text>
                        </Body>
                        <Right>
                            <Text>$21.49</Text>
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