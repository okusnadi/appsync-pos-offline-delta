import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import {
    Text,
    Container,
    Content,
    Spinner,
    List,
    ListItem,
    Left,
    Right,
    Body,
} from 'native-base';
import styles from './styles';

class Orders extends React.Component {
    static navigationOptions = {
        title: 'Order History'
    };

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Container>
                <Content>
                    <List>
                        <ListItem itemDivider>
                            <Text>July 20, 2019</Text>
                        </ListItem>
                        <ListItem thumbnail>
                            <Left>
                                <Ionicons name="ios-cloud-done" size={30} color="green" />
                            </Left>
                            <Body>
                                <Text style={styles.orderTitle}>11:07 AM</Text>
                                <Text note>#AFG-1007-201</Text>
                            </Body>
                            <Right>
                                <Text style={styles.orderTitle}>$21.49</Text>
                            </Right>
                        </ListItem>
                        <ListItem thumbnail>
                            <Left>
                            <Ionicons name="ios-cloud" color="gray" size={30} />
                            </Left>
                            <Body>
                                <Text style={styles.orderTitle}>8:15 AM</Text>
                                <Text note>#GTR-1008-876</Text>
                            </Body>
                            <Right>
                                <Text style={styles.orderTitle}>$4.35</Text>
                            </Right>
                        </ListItem>
                        <ListItem itemDivider>
                            <Text>July 19, 2019</Text>
                        </ListItem>
                        <ListItem thumbnail>
                            <Left>
                            <Ionicons name="ios-cloud-done" color="green" size={30} />
                            </Left>
                            <Body>
                                <Text style={styles.orderTitle}>4:32 PM</Text>
                                <Text note>#ABF-1009-321</Text>
                            </Body>
                            <Right>
                                <Text style={styles.orderTitle}>$7.99</Text>
                            </Right>
                        </ListItem>
                    </List>
                </Content>
            </Container>
        );
    }
}

export default Orders;