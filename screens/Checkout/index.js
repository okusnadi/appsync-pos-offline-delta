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

class Checkout extends React.Component {
    static navigationOptions = {
        title: 'Checkout'
    };

    constructor(props) {
        super(props);
        this.checkoutBtnHandler = this.checkoutBtnHandler.bind(this);
    }

    checkoutBtnHandler() {
        return ActionSheet.show({
            options: ["Pay with cash", "Pay with credit card"],
        }, () => {
            Toast.show({
                text: "Order has been processed",
                buttonText: "Okay",
                duration: 4000
            });
        });
    }

    render() {
        return (
            <Container>
                <Content>
                    <Text style={styles.totalTxt}>TOTAL</Text>
                    <Text style={styles.totalQty}>$21.49</Text>
                    <List>
                        <ListItem itemDivider>
                            <Text>&nbsp;</Text>
                        </ListItem>
                        <ListItem icon>
                            <Left>
                                <Text>3</Text>
                            </Left>
                            <Body>
                                <Text>Chocolate Donut</Text>
                            </Body>
                            <Right>
                                <Text>$6.00</Text>
                            </Right>
                        </ListItem>
                        <ListItem icon>
                            <Left>
                                <Text>1</Text>
                            </Left>
                            <Body>
                                <Text>Drip Coffee</Text>
                            </Body>
                            <Right>
                                <Text>$3.49</Text>
                            </Right>
                        </ListItem>
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
                    <Button block info style={styles.checkoutBtn} onPress={this.checkoutBtnHandler}>
                        <Text style={styles.checkoutTxt}>Checkout</Text>
                    </Button>
                </Content>
            </Container>
        );
    }
}

export default Checkout;