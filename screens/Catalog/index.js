import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import {
    Text,
    Container,
    Content,
    Button,
    List,
    ListItem,
    Thumbnail,
    Left,
    Right,
    Body
} from 'native-base';
import { listProducts } from '../../graphql/queries';
import { addLineItem } from '../../redux/actions';
import styles from './styles';

const Catalog = (props) => {

    const order = useSelector(state => state.order);
    const dispatch = useDispatch();

    function checkoutBtnHandler() {
        return props.navigation.push('Checkout');
    }

    function addProductHandler(product) {
        dispatch(addLineItem(product));
    }

    const productList = props.products.map(product => (
        <ListItem thumbnail key={product.id}>
            <Left>
                <Thumbnail square source={{ uri: product.image }} />
            </Left>
            <Body>
                <Text>{product.name}</Text>
                <Text note numberOfLines={1}>${product.price}</Text>
            </Body>
            <Right>
                <Button onPress={() => addProductHandler(product)}>
                    <Text>Add</Text>
                </Button>
            </Right>
        </ListItem>
    ));

    return (
        <Container>
            <Content>
                <Button block info style={styles.checkoutBtn} onPress={checkoutBtnHandler}>
                    <Text style={styles.quantityText}>{order.totalQty}</Text>
                    <Text style={styles.subtotalTxt}>Subtotal ${order.subtotal.toFixed(2)}</Text>
                </Button>
                <List>
                    {productList}
                </List>
            </Content>
        </Container>
    );
};

Catalog.navigationOptions = {
    title: 'Point of Sale',
};

const listProductsQuery = gql(listProducts);
export default graphql(listProductsQuery, {
    props: ({ data }) => ({
        products: data.listProducts ? data.listProducts.items : [],
    })
})(Catalog);