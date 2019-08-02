import React from 'react';
import { RefreshControl } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import moment from 'moment';
import {
    Text,
    Container,
    Content,
    List,
    ListItem,
    Left,
    Right,
    Body,
} from 'native-base';
import { listOrders } from '../../graphql/queries';
import styles from './styles';

const Orders = (props) => {

    const orderList = props.orders.map(order => (
        <ListItem thumbnail key={order.id}>
            <Left>
                <Ionicons name="ios-cloud-done" size={30} color="green" />
            </Left>
            <Body>
                <Text style={styles.orderTitle}>{moment(order.createdAt).format('hh:mm A')}</Text>
                <Text note>#{order.id.substring(24)}</Text>
            </Body>
            <Right>
                <Text style={styles.orderTitle}>${order.total.toFixed(2)}</Text>
            </Right>
        </ListItem>
    ));

    return (
        <Container>
            <Content refreshControl={
                <RefreshControl
                    refreshing={props.loading}
                    onRefresh={props.refreshOrders}
                />
            }>
                <List>
                    <ListItem itemDivider>
                        <Text>July 21, 2019</Text>
                    </ListItem>
                    {orderList}
                </List>
            </Content>
        </Container>
    );
};

Orders.navigationOptions = {
    title: 'Order History'
};

const listOrdersQuery = gql(listOrders);
export default graphql(listOrdersQuery, {
    props: ({ data }) => ({
        orders: data.listOrders ? data.listOrders.items : [],
        refreshOrders: data.refetch,
        loading: data.networkStatus === 4,
    })
})(Orders);