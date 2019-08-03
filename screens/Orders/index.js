import React from 'react';
import { RefreshControl } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import moment from 'moment';
import _ from 'lodash';
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

    // Moment complains that date format is deprecated
    const ordersFormatted = props.orders.map(order => ({
        ...order,
        createdAt: new Date(parseInt(order.createdAt))
    }));

    const ordersByDay = _.groupBy(ordersFormatted, order => moment(order.createdAt).format('YYYY-MM-DD'));
    const days = _.keys(ordersByDay);
    const ordersByDayList = days.sort().reverse().map(day => {
        const orders = ordersByDay[day];
        const orderList = orders.map(order => (
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

        const sectionTitle = (
            <ListItem itemDivider key={day}>
                <Text>{moment(day).format('MMM Do, YYYY')}</Text>
            </ListItem>
        );
        
        return [sectionTitle, ...orderList];
    });

    return (
        <Container>
            <Content refreshControl={
                <RefreshControl
                    refreshing={props.loading}
                    onRefresh={props.refreshOrders}
                />
            }>
                <List>
                    {ordersByDayList}
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